document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const row in rows) {
    const [first, second] = row.toLocaleLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toLocaleUpperCase
    )}`;
    console.log(output);
  }
});

// underscore_case => underScoreCase
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departur
