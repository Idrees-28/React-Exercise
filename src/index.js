import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
import Toggle from './Toggle';
import NameInput from './FormHandler';
import TodoItem from './Api';
import DynamicList from './DynamicList';


const root=ReactDOM.createRoot(document.getElementById("root"))




root.render(<DynamicList/>,<Counter/>,<NameInput/>,<TodoItem/>,<Toggle/>)
