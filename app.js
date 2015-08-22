var JobBoard = require('./jobboard');

// job states
// - created
// - assigned
// - running
// - stopped
// - finished

// sort job board
var jbSortBoard = new JobBoard({});

// on client...
var jobId = jbSortBoard.createJob({
	name: 'sort by LastName',
	config: {
		field: 'LastName',
		direction: 'ASC'
	}
});

// on worker1...
// pass env config to get next unassigned job ID
var unassignedJobId = jbSortBoard.getNextUnassignedJob({
	workerID: 'worker1',
	jobTypes: ['send_email','backup_files'],
	cpu: 'superfast',
	meta1: 'foobar'
});

// assign worker to job
jbSortBoard.assignWorker(unassignedJobId, 'worker1');

// start job
// args: parentJob, siblingJobs, childJobs
jbSortBoard.startJob(unassignedJobId, function(pJob, sJobs, cJob){

	var results = {
		field: 'LastName',
		direction: 'ASC'
	};

	jbSortBoard.finishJob(unassignedJobId, results);

});



// on client...
var jobId = jbSortBoard.createJob({
	name: 'sort by LastName',
	config: {
		field: 'LastName',
		direction: 'ASC'
	}
});

// on worker1...
// pass env config to get next unassigned job ID
var unassignedJobId = jbSortBoard.getNextUnassignedJob({
	workerID: 'worker1',
	jobTypes: ['send_email','backup_files'],
	cpu: 'superfast',
	meta1: 'foobar'
});

// assign worker to job
jbSortBoard.assignWorker(unassignedJobId, 'worker1');

// start job
// args: parentJob, siblingJobs, childJobs
jbSortBoard.startJob(unassignedJobId, function(pJob, sJobs, cJob){

	var results = {
		field: 'LastName',
		direction: 'ASC'
	};

	jbSortBoard.finishJob(unassignedJobId, results);

});



// on client...
var jobId = jbSortBoard.createJob({
	parentJobId: '1.2',
	name: 'sort by LastName',
	config: {
		field: 'LastName',
		direction: 'ASC'
	}
});

// on worker1...
// pass env config to get next unassigned job ID
var unassignedJobId = jbSortBoard.getNextUnassignedJob({
	workerID: 'worker1',
	jobTypes: ['send_email','backup_files'],
	cpu: 'superfast',
	meta1: 'foobar'
});

// assign worker to job
jbSortBoard.assignWorker(unassignedJobId, 'worker1');

// start job
// args: parentJob, siblingJobs, childJobs
jbSortBoard.startJob(unassignedJobId, function(pJob, sJobs, cJob){

	var results = {
		field: 'LastName',
		direction: 'ASC'
	};

	jbSortBoard.finishJob(unassignedJobId, results);

});



// on client...
var jobId = jbSortBoard.createJob({
	parentJobId: '1.2',
	name: 'sort by LastName',
	config: {
		field: 'LastName',
		direction: 'ASC'
	}
});

// on worker1...
// pass env config to get next unassigned job ID
var unassignedJobId = jbSortBoard.getNextUnassignedJob({
	workerID: 'worker1',
	jobTypes: ['send_email','backup_files'],
	cpu: 'superfast',
	meta1: 'foobar'
});

// assign worker to job
jbSortBoard.assignWorker(unassignedJobId, 'worker1');

// start job
// args: parentJob, siblingJobs, childJobs
jbSortBoard.startJob(unassignedJobId, function(pJob, sJobs, cJob){

	var results = {
		field: 'LastName',
		direction: 'ASC'
	};

	jbSortBoard.finishJob(unassignedJobId, results);

});

console.log(JSON.stringify(jbSortBoard.jl, null, 1));
