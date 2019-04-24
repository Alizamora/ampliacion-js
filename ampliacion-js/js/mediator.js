const M = new (function () {
	const topics = {};
	return class Mediator {
		subscribe(topic, callback) {
			if (!topics[topic]) {
				topics[topic] = [];
			}
			topics[topic].push(callback);
		}
		publish(topic) {
			if (!topics[topic]) {
				return;
			}
			return {
				topic(e) {
					topics[topic].forEach((callback) => {
						callback(e);
					});
				}
			};
		}
	};
}());