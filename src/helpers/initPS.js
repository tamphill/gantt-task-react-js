export function findTaskVotes(inID) {
    let item = initTV.filter(function (e) {
        return e.taskid === inID;
    });
    console.log("find vote by id", inID, "result:", item);
    if (item.length > 0) {
        return item;
    }
    else {
        return null;
    }
}
export function findActiveVotes(inVotes) {
    let item = inVotes.filter(function (e) {
        return e.voteready === false;
    });
    console.log("find active votes ", item);
    if (item.length > 0) {
        return item;
    }
    else {
        return null;
    }
}
export const initTV = [
    {
        taskid: "Task 1",
        id: "10090",
        name: "prototype member change 1",
        votestart: new Date(2023, 0, 4),
        votefinnish: new Date(2023, 0, 6),
        voteready: true,
        forV: 38,
        againstV: 15,
        abstainV: 5
    },
    {
        taskid: "Task 1",
        id: "100112",
        name: "prototype budget change 1",
        votestart: new Date(2023, 0, 5),
        votefinnish: new Date(2023, 0, 8),
        voteready: true,
        forV: 24,
        againstV: 48,
        abstainV: 10
    },
    { taskid: "Task 2",
        id: "100137",
        name: "design budget change 1",
        votestart: new Date(2023, 0, 10),
        votefinnish: new Date(2023, 0, 13),
        voteready: true,
        forV: 82,
        againstV: 14,
        abstainV: 2
    },
    { taskid: "Task 2",
        id: "100221",
        name: "design product change 1",
        votestart: new Date(2023, 0, 5),
        votefinnish: new Date(2023, 0, 8),
        voteready: true,
        forV: 120,
        againstV: 12,
        abstainV: 0
    },
    { taskid: "Task 2",
        id: "100224",
        name: "design team change 1",
        votestart: new Date(2023, 0, 15),
        votefinnish: new Date(2023, 0, 18),
        voteready: false,
        forV: 44,
        againstV: 44,
        abstainV: 5
    },
    { taskid: "Task 3",
        id: "100311",
        name: "develop milestone 1",
        votestart: new Date(2023, 0, 15),
        votefinnish: new Date(2023, 0, 19),
        voteready: false,
        forV: 10,
        againstV: 12,
        abstainV: 0
    },
    { taskid: "Task 3",
        id: "100327",
        name: "develop budget change 1",
        votestart: new Date(2023, 0, 20),
        votefinnish: new Date(2023, 0, 22),
        voteready: false,
        forV: 0,
        againstV: 0,
        abstainV: 0
    },
    { taskid: "Task 4",
        id: "100414",
        name: "validate supplier 1",
        votestart: new Date(2023, 0, 17),
        votefinnish: new Date(2023, 0, 19),
        voteready: false,
        forV: 8,
        againstV: 22,
        abstainV: 1,
    },
    { taskid: "Task 4",
        id: "100327",
        name: "validate review 2",
        votestart: new Date(2023, 0, 21),
        votefinnish: new Date(2023, 0, 24),
        voteready: false,
        forV: 0,
        againstV: 0,
        abstainV: 0,
    },
];