import React from "react";
import styles from "./modal.module.css";
import { useState } from "react";


const Modal = (props) => {
  const [activeTab, setActiveTab] = useState("Basic");
  const [localUser, setLocalUser] = useState({})

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setLocalUser((prev) => ({ ...prev, [name]: value }));
  };

  const submitchange = () => {
    if(localUser == {}){
      return
    }else{
    props.setUser(localUser);
    handleModalChange();
    }
  }

  const handleModalChange = () => {
    props.setAddProfile(false)
  }

  const renderButtons = () => {
    if (activeTab === "Basic") {
      // Show the "Next" button for Basic tab
      return (
        <>
        <div className={styles.button1}>
              <div className={styles.buttonText} />
            </div>
            <div className={styles.buttonGroup} onClick={() => handleTabChange("Social")}>
              <div className={styles.button3}>
                <div
                  className={styles.buttonText2}
                  
                  >
                  Next
                </div>
              </div>
            </div>
          </>
      );
    } else {
      // Show "Back" and "Done" buttons for Social tab
      return (
        <>
        <div className={styles.button1}>
              <div className={styles.buttonText} />
            </div>
            <div className={styles.buttonGroup}>
              <div className={styles.button2} onClick={() => handleTabChange("Basic")}>
                <div className={styles.addProfile}>Back</div>
              </div>
              <div className={styles.button3} onClick={submitchange}>
                <div
                  className={styles.buttonText2}
                  
                  >
                  Done
                </div>
              </div>
            </div>
          </>
      );
    }
  };

  return (
    <>
      <div className={styles.modalDialog}>
        <div className={styles.headerModule}>
          <div className={styles.headerHolder}>
            <div className={styles.title}>Add New Profile</div>
            <div className={styles.button} onClick={handleModalChange}>
              <img className={styles.icon} alt="" src="/cross-icon.svg" />
            </div>
          </div>
          <div className={styles.divider} />
        </div>
        <div className={styles.contentPlaceholderModule}>
          <div className={styles.frameParent3}>
            <div className={styles.frameChild1} />
            <div
              className={styles.inputTitle}
              onClick={() => handleTabChange("Basic")}
            >
              Basic
            </div>
            <div
              className={styles.inputTitle1}
              onClick={() => handleTabChange("Social")}
            >
              Social
            </div>
            <div
              className={styles.rectangleDiv}
              style={{ backgroundColor: activeTab === "Basic" ? "#3F84F8" : "#d9d9d9" }}
            />
            <div
              className={styles.frameChild2}
              style={{ backgroundColor: activeTab === "Social" ? "#3F84F8" : "#d9d9d9" }}
            />
          </div>
          {activeTab === "Social" ? <div className={styles.contentPlaceholderModule}>
      {/* <div className={styles.frameParent3}>
            <div className={styles.frameChild1} />
            <div className={styles.inputTitle}>Basic</div>
            <div className={styles.inputTitle1} >Social</div>
            <div className={styles.rectangleDiv} />
            <div className={styles.frameChild2} />
          </div> */}
      <div className={styles.textInputWrapper}>
        <div className={styles.textInput}>
          <div className={styles.placeholderText}>
            <span>{`Instagram Link `}</span>
            <span className={styles.optional}>{`(Optional)  `}</span>
          </div>
          <input name="instagram_username" className={styles.inputContainer} placeholder="Eg. ..instagram.com/username" onChange={(e) => handleUserChange(e)}>
            {/* <div className={styles.placeholderText}>
              Eg. ..instagram.com/username
            </div> */}
          </input>
        </div>
      </div>
      <div className={styles.textInput1}>
        <div className={styles.placeholderText}>
          <span>{`Youtube Link `}</span>
          <span className={styles.optional}>(Optional)</span>
        </div>
      </div>
      <input name="youtube_username" className={styles.inputContainer} placeholder="Eg. ..youtebe/username" onChange={(e) => handleUserChange(e)}>
        {/* <div className={styles.placeholderText}>Eg. ..youtebe/username</div> */}
      </input>
    </div>  : <div className={styles.contentPlaceholderModule}>
  <div className={styles.textInputWrapper}>
    <div className={styles.textInput}>
      <div className={styles.placeholderText}>
        <span>{`Enter Name `}</span>
        <span className={styles.optional}>{`(Optional)  `}</span>
      </div>
      <input name="name" className={styles.inputContainer} placeholder="Eg. John Doe" onChange={(e) => handleUserChange(e)}>
        {/* <div className={styles.placeholderText}>johndoe..</div> */}
      </input>
    </div>
  </div>
  <div className={styles.textInput1}>
    <div className={styles.placeholderText}>
      <span>{`Enter Email `}</span>
      <span className={styles.optional}>(Optional)</span>
    </div>
  </div>
  <input name='email' className={styles.inputContainer} placeholder="Eg. John@xyz.com" onChange={(e) => handleUserChange(e)}>
    {/* <div className={styles.placeholderText}>johndoe@gmail.com</div> */}
  </input>
  <div className={styles.textInput1}>
    <div className={styles.placeholderText}>
      <span>{`Enter Phone `}</span>
      <span className={styles.optional}>(Optional)</span>
    </div>
  </div>
  <input name="phone" className={styles.inputContainer} placeholder="9123456789" onChange={(e) => handleUserChange(e)}>
    {/* <div className={styles.placeholderText}>5844528551</div> */}
  </input>
</div>}
        </div>
        <div className={styles.footerModule}>
          <div className={styles.seperator} />
          <div className={styles.headerHolder}>
            {/* Conditionally render buttons */}
            {renderButtons()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
