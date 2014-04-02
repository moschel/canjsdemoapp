steal(
  'can',
  'lodash',
  'moment',
  'analytics',
  'can/map/setter',
  function (can, _, moment) {
	/**
		AppState is the can.Map constructor representing the state of this application.
		It has the following properties:

			{
				stock: "DIS"
				interval: a string ("week", "month", or "year")
			}
	**/
	var AppState = can.Map.extend({

	})

	return AppState;
})