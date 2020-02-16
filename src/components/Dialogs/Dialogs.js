import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>Homer</div>
        <div className={s.dialog}>Bob</div>
        <div className={s.dialog}>Janpol</div>
        <div className={`${s.dialog} ${s.active}`}>Louis-Ferdinand</div>
        <div className={s.dialog}>Romain Gary</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hello</div>
        <div className={s.message}>Morning glory</div>
        <div className={s.message}>Evening happy</div>
      </div>
    </div>
  );
};
export default Dialogs;
