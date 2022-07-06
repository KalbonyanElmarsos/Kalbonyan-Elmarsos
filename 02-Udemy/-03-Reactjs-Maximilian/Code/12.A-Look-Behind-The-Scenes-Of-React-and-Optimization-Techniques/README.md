# 😎Section Notes

## 😍React create virtual DOM to inject only the changed element into the real DOM.

## 😍Any change in parent comp will lead to re-evaluation for any custom children comps --> to avoid this we use React.memo() func.

## 😍So to avoid any unnessary comp re-evaluation we have to use React.memo,{do not forget this also cause a cosy }

## 😍React.memo() prevent any comp has primitive props from re-evaluation but not working if props are references {objects}, in this case we use useCallBack() hook.

## 😍the state do not change after calling SetState() --- in some times it delayed for other urgant react tasks, so the best way to alter a state is by using a callBack fun in the SetState((prevState)=>{change state her}) , this only used if the new state depends on the prev state

## 😍useMemo() used to optimize func result from re-calculated again

### 🐳🐳[section-project](https://react-course-section12.netlify.app/)
