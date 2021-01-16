const events = {
  subscribers: {},
  subscribe: function (eventName, fn) {
    this.subscribers[eventName] = this.subscribers[eventName] || [];
    this.subscribers[eventName].push(fn);

    const index = this.subscribers[eventName].length - 1;

    return {
      unsubscribe: () => {
        this.subscribers[eventName].splice(index, 1);
      },
    };
  },
  publish: function (eventName, data) {
    if (this.subscribers[eventName]) {
      this.subscribers[eventName].forEach(function(fn) {
        fn(data);
      });
    }
  }
};


var e1 = events.subscribe("anEvent", data => console.log(`"anEvent", was published with this data: "${data.msg}"`));

var data = {msg: "TOP SECRET DATA"};
        
events.publish("anEvent", data);

e1.unsubscribe("anEvent", console.log(`"anEvent", was unsub with this data: "${data.msg}"`));