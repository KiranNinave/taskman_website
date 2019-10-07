import moment from "moment";

export default (tasks, { text, startDate, endDate, status }) => {
    return tasks.filter(task => {
        const taskStartDate = moment.unix(task.startDate);
        const taskEndDate = moment.unix(task.endDate);

        const startDateMatch = startDate
            ? startDate.isSameOrBefore(taskStartDate, "day")
            : true;

        const endDateMatch = endDate
            ? endDate.isSameOrAfter(taskEndDate, "day")
            : true;

        const statusMatch = task.status
            .toLowerCase()
            .includes(status.toLowerCase());

        const textMatch = task.name.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && statusMatch && textMatch;
    });
};
