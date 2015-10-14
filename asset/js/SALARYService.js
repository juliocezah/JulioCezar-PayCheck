var SALARYService = {
    
    calculateinss: function(salary, callback) {
		$.ajax({
		  url: 'services/temp.action.php',
		  data: {'salary': salary},
		  success: function(resultinss) {
		  	callback(parseFloat(resultinss));
		  	callbackIRPF(parseFloat(irpfcalc));
		  	callbackLIQUID(parseFloat(salaryliq ));
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	},
};