# 😎Section Notes

## 😍Routing--> change page content base on changing URL

## 😍defference between a,Link,NavLink?

- 1. a--> Pure html element leads to whole page refreshing.
- 2. Link--> Reactjs component from react-router-dom do the same functionality of (a) except preventing page from refreshing
- 3. NavLink--> act as (a) and (Link) except that you can property called activeClass to detect which page is active now

## 😍why **Switch**? --> to disable multi-Routes from rendering at the same time and render only the matched path component.

## 😍when to use **exact** --> to enable only the exact path to render , another solution is by change the routes order which more specific in above.....ETC

## 😍<prompt when={} message={()=>{}}/> (react-router-dom component)--> used to create a warning for he user

## 😍useHistory VS useParams VS useLocation? (react-router-dom hooks)

- 1. useHistory hook --> to manipulate URL .
- 2. useParams hook --> to access URl params.
- 3. useLocation hook --> to manipulate URL queries.

## 😍react-router-dom5 VS react-router-dom6?

- 1. switch -->Routes
- 2. useHistory --> useNavigate.
- 3. routes order matter --> does not matter any more.
- 4. nested routes handled in any pages only --> nested route can be handled in app.js aor any page using (<Outlet> component).
- 5. activeClassName --> className={(navData)=>navData.isActive? '' : ''}

* 6. prompt component --> not exist till now

## 😍React.lazy() --> help for faster app initiation

### 🐳🐳[section20-project](https://react-course-section20.netlify.app/)
