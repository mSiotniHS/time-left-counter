class DatabaseBureau {
  constructor() {
    this.storageAvailable()
      ? console.log("Local Storage is available")
      : console.log("Local Storage is unavailable");
  }

  storageAvailable() {
    try {
      const storage = window["localStorage"],
        x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (error) {
      return false;
    }
  }

  addEvent(event) {
    let id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
    localStorage.setItem(id, JSON.stringify(event));
  }

  getEvents() {
    let events = [];
    const keys = Object.keys(localStorage);

    for (let idx = 0; idx < keys.length; idx++) {
      const id = keys[idx];
      let event;
      try {
        event = JSON.parse(localStorage.getItem(id));
        event._id = id;
        events.push(event);
      } catch (error) {
        continue;
      }
    }

    return events;
  }

  deleteEvent(eventID) {
    localStorage.removeItem(eventID);
  }
}

export default DatabaseBureau;
