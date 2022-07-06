'use strict';

// const form = document.querySelector('.form');
// const containerWorkouts = document.querySelector('.workouts');
// const inputType = document.querySelector('.form__input--type');
// const inputDistance = document.querySelector('.form__input--distance');
// const inputDuration = document.querySelector('.form__input--duration');
// const inputCadence = document.querySelector('.form__input--cadence');
// const inputElevation = document.querySelector('.form__input--elevation');

// -- Global variables
// console.log(globalVariable);//it accessed from her
// ------------- 232. Using the Geolocation API ----------------------------------------------------------
// ------------- 234. Displaying a Map Marker ----------------------------------------------------------
// -------------235. Rendering Workout Input Form  ----------------------------------------------------------
/*
let map, mapEvent;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
      const { latitude, longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      map = L.map('map').setView([latitude, longitude], 13);

      // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // L.marker([latitude, longitude])
      //   .addTo(map)
      //   .bindPopup(
      //     L.popup({
      //       maxWidth: 300,
      //       minWidth: 150,
      //       autoClose: false,
      //       closeOnClick: false,
      //       className: 'running-popup',
      //     })
      //   )
      //   .setPopupContent('Workout')
      //   .openPopup();

      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
        // const { lat, lng } = mapE.latlng;
        // L.marker([lat, lng])
        //   .addTo(map)
        //   .bindPopup(
        //     L.popup({
        //       maxWidth: 300,
        //       minWidth: 150,
        //       autoClose: false,
        //       closeOnClick: false,
        //       className: 'running-popup',
        //     })
        //   )
        //   .setPopupContent('Workout')
        //   .openPopup();
      });

     
    },
    function () {
      alert('Something went wrong');
    }
  );
} else {
  alert('Your browser not support Geolocation');
}
 form.addEventListener('submit', function (event) {
        event.preventDefault();
        inputDistance.value =
          inputDuration.value =
          inputCadence.value =
          inputElevation.value =
            '';
        const { lat, lng } = mapEvent.latlng;
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 300,
              minWidth: 150,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup',
            })
          )
          .setPopupContent('Workout')
          .openPopup();
      });

      inputType.addEventListener('change', function (e) {
        inputCadence
          .closest('.form__row')
          .classList.toggle('form__row--hidden');
        inputElevation
        .closest('.form__row')
        .classList.toggle('form__row--hidden');
      });
      */

// ------------- 237. Refactoring for Project Architecture ----------------------------------------------------------
// ------------- 238. Managing Workout Data: Creating Classes ----------------------------------------------------------
// ------------- 239. Creating a New Workouts ----------------------------------------------------------
// ------------- 240. Rendering Workouts  ----------------------------------------------------------
// ------------- 241. Move to Marker On Click ----------------------------------------------------------
// ------------- 242. Working with localStorage  ----------------------------------------------------------
// /*
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  // clicks = 0;
  constructor(distance, duration, coords) {
    this.distance = distance; // KM
    this.duration = duration; // minutes
    this.coords = coords; // [lat , lang ]
  }
  'Running on April 14';
  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
  // click() {
  //   this.clicks++;
  // }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(distance, duration, coords, elevationGain) {
    super(distance, duration, coords);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    return (this.speed = this.duration / this.distance);
  }
}

class Running extends Workout {
  type = 'running';
  constructor(distance, duration, coords, cadence) {
    super(distance, duration, coords);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    return (this.pace = this.distance / this.duration);
  }
}

// testing objects
// const running = new Running(5.2, 24, [39, -12], 523);
// const cycling = new Cycling(3.2, 34, [39, -12], 223);
// console.log(cycling);
// console.log(running);

class App {
  //  Private Properties
  #map;
  #mapEvent;
  #zoomValue = 13;
  #workout = [];
  constructor() {
    this._getPosition();

    this._getLocalStorage();

    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField.bind(this));

    containerWorkouts.addEventListener('click', this._moveToWorkout.bind(this));
  }
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workout));
  }
  _getLocalStorage() {
    // return back data from localStorage.
    const workouts = JSON.parse(localStorage.getItem('workouts'));
    // render workouts on the left side
    if (!workouts) return;
    this.#workout = workouts;
    this.#workout.forEach(item => this._renderingWorkout(item));
  }
  _moveToWorkout(event) {
    // Event delegation
    const targetElement = event.target.closest('.workout');

    if (!targetElement) return;

    const workoutObject = this.#workout.find(
      el => el.id === targetElement.dataset.id
    );
    // Workout.click();

    this.#map.setView(workoutObject.coords, this.#zoomValue, {
      animate: true,
      pan: { duration: 1 },
    });
  }

  //  Private methods
  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Please allow app to know your location');
        }
      );
    } else {
      alert('Your browser not support Geolocation');
    }
  }

  _loadMap(position) {
    // console.log(this);
    // console.log(position);
    // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    const { latitude, longitude } = position.coords;

    this.#map = L.map('map').setView([latitude, longitude], this.#zoomValue);

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    // load marker if there are workouts in the local storage after loading the map
    this.#workout.forEach(item => this._renderingMarker(item));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(event) {
    event.preventDefault();
    // - Helper functions
    const isNumber = (...inputs) =>
      inputs.every(input => Number.isFinite(input));
    const isPositive = (...inputs) => inputs.every(input => input > 0);

    //  1) get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let object;

    // 2) validate input data

    // 3) if running then create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !isNumber(distance, duration, cadence) ||
        !isPositive(distance, duration, cadence)
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
      )
        return alert('plz Enter a number');

      object = new Running(
        distance,
        duration,
        [this.#mapEvent.latlng.lat, this.#mapEvent.latlng.lng],
        cadence
      );
    }
    // 3) if cycling then create cycling object
    if (type === 'cycling') {
      const elevation = +inputCadence.value;

      if (
        !isNumber(distance, duration, elevation) ||
        !isPositive(distance, duration)
      )
        return alert('plz Enter a number');
      object = new Cycling(
        distance,
        duration,
        [this.#mapEvent.latlng.lat, this.#mapEvent.latlng.lng],
        elevation
      );
    }
    // 4) insert the object into workout array
    this.#workout.push(object);
    // console.log(object);
    // 5) rendering the object on the map as a marker
    this._renderingMarker(object);

    //  6)  render workout on list
    this._renderingWorkout(object);

    //  7)  hide form and clear inout data
    this._hideForm();

    // 8) set localStorage
    this._setLocalStorage();
  }
  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }
  _renderingMarker(workOut) {
    L.marker(workOut.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 300,
          minWidth: 150,
          autoClose: false,
          closeOnClick: false,
          className: `${workOut.type}-popup`,
        })
      )
      .setPopupContent(
        `${workOut.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workOut.description}`
      )
      .openPopup();
  }

  _renderingWorkout(workout) {
    let html = `
       <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
         </div>
   `;
    if (workout.type === 'running') {
      html += `
         
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>
   `;
    }
    if (workout.type === 'cycling') {
      console.log(workout);
      html += `
         
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>
    `;
    }
    form.insertAdjacentHTML('afterend', html);
  }
}

const app = new App();

//*/
// ------------- ----------------------------------------------------------
// /*

//*/
