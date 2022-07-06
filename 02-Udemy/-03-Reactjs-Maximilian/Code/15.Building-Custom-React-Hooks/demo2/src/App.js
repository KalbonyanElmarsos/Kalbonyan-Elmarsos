import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useRequest from "./custom-hooks/useRequest";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, AJAXRequest: fetchTasks } = useRequest();
  // } = useRequest(
  //   {
  //     URL: "https://react-demo-37e14-default-rtdb.firebaseio.com/tasks.json",
  //   },
  //   handleData
  // );

  useEffect(() => {
    const handleData = (requestedData) => {
      const loadedTasks = [];
      for (const taskKey in requestedData) {
        loadedTasks.push({ id: taskKey, text: requestedData[taskKey].text });
      }

      setTasks(loadedTasks);
    };
    fetchTasks(
      {
        URL: "https://react-demo-37e14-default-rtdb.firebaseio.com/tasks.json",
      },
      handleData
    );
    // fetchTasks();
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
