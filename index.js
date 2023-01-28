
const employee = {
    name: "beau",
    streetAddress: "27 broadway",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value
    return { ...employee, ...{ [key]: value }}
    return newEmployee.name = "Sam";
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return { ...employee, ...{ [key]: value }}
    return newEmployee.streetAddress = "12 Broadway";
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee2 = {...employee}
    delete newEmployee2[key];
    return newEmployee2;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}