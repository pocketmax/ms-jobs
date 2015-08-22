module.exports = function (cfg){

	var jobList = {};

	this.jl = jobList;

	// returns the new jobID
	this.createJob = function(cfg){

		cfg.status = 'created';
		cfg.assignedWorker = null;


		var allKeys = Object.keys(jobList);

		// joblist is empty - newJobID is 1
		if(!Object.keys(jobList).length){
			var newJobId = 1;

		// no parent job - newJobID is next job ID at root
		} else if( typeof cfg.parentJobId === 'undefined' ){

			var rootKeys = [];
			for( var i = 0; i<allKeys.length; i++){

				if( !/\./.test(allKeys[i]) ){
					rootKeys.push(jobList[i]);
				}
			}
			var newJobId = rootKeys.length + 1;

		// parent job present - newJobID should exist under that parent
		} else if( cfg.parentJobId ){

			var tmpJobId = 1;
			while(jobList[cfg.parentJobId + '.' + tmpJobId]){
				console.log('parentJobId: ' + cfg.parentJobId + ' tmpJobId: ' + tmpJobId);
				++tmpJobId;
			}
			var newJobId = cfg.parentJobId + '.' + tmpJobId;

		}

		if( typeof newJobId === 'undefined' ){
			console.log('newJobId is not set and it should not be');
			return false;
		}

		jobList[newJobId] = cfg;

		return newJobId;

	};

	// passes worker env data
	// returns jobID of pre-existing unassigned job the worker can use
	this.getNextUnassignedJob = function(workerEnv){

		for(var i in jobList){
			if(jobList[i].assignedWorker){
				continue;
			}

			return i;
		}

	};

	this.assignWorker = function(jobId, workerId){
		jobList[jobId].status = 'assigned';
		jobList[jobId].assignedWorker = workerId;

	};

	this.startJob = function(jobId, cb){

		var pJob = {},
			sJobs = {},
			cJobs = {};

		jobList[jobId].status = 'running';
		cb(pJob, sJobs, cJobs);

	};

	this.finishJob = function(jobId, results){

		jobList[jobId].status = 'finished';
		jobList[jobId].results = results;

	};

};

