const employee = {
    name: "Chad",
    streetAddress: "22 Washington"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const emp = {...employee};
    emp[key] = value
    return emp
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {delete: employee[key]}
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee
}
