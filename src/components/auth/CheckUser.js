import {
    INACTIVE_USER_TIME_THRESHOLD,
    USER_ACTIVITY_THROTTLER_TIME
  } from "./constants";

  import AuthService from "./auth-service";
 
  let service = new AuthService();
  
  let userActivityTimeout = null;
  let userActivityThrottlerTimeout = null;
  let isInactive = false;
  
//   activateActivityTracker();

function activateActivityTracker() {
      console.log("USER DOING STUFF");
    window.addEventListener("mousemove", userActivityThrottler);
    window.addEventListener("scroll", userActivityThrottler);
    window.addEventListener("keydown", userActivityThrottler);
    window.addEventListener("resize", userActivityThrottler);
    window.addEventListener("beforeunload", deactivateActivityTracker);
  }
  
  function deactivateActivityTracker() {
    window.removeEventListener("mousemove", userActivityThrottler);
    window.removeEventListener("scroll", userActivityThrottler);
    window.removeEventListener("keydown", userActivityThrottler);
    window.removeEventListener("resize", userActivityThrottler);
    window.removeEventListener("beforeunload", deactivateActivityTracker);
  }
  
  function resetUserActivityTimeout() {
    clearTimeout(userActivityTimeout);
  
    userActivityTimeout = setTimeout(() => {
      //userActivityThrottler();
      inactiveUserAction();
    }, INACTIVE_USER_TIME_THRESHOLD);
  }
  
  function userActivityThrottler() {
    if (isInactive) {
      isInactive = false;
      resetUserActivityTimeout();
    }
  
    if (!userActivityThrottlerTimeout) {
      userActivityThrottlerTimeout = setTimeout(() => {
        resetUserActivityTimeout();

        clearTimeout(userActivityThrottlerTimeout);
      }, USER_ACTIVITY_THROTTLER_TIME);
    }
  }
  
  function inactiveUserAction() {
    isInactive = true;
    service.logout();
  }

