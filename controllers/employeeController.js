const Employee = require('../models/employee');


// Lấy tất cả nhân viên ( Read - All)

module.exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// tạo nhân viên mới 

module.exports.createEmployee = async( req,res) => {

    const employee = new Employee(req.body);
    try {
            const newEmployee = await employee.save();
            res.status(201).json(newEmployee);

    }catch (error)
    {
            res.status(400).json({ message: error.message });
    }
};

// Cập nhật nhân viên 


module.exports.updateEmployee = async (req,res) =>
{
    try {
        const updateEmployee = await Employee.findByIdAndUpdate(req.params.id,req.body,{ new : true});
        res.json(updateEmployee);
    } catch (error)
    {
        res.status(400).json({ message: error.message });
    }
};

// Xóa nhân viên

module.exports.deleteEmployee = async (req,res) => {
    try{
             await Employee.findByIdAndDelete(req.params.id);
             res.jsson({ message: 'Employee deleted successfully' });
    } catch (error)
    {
        res.status(500).json({ message: error.message });
    }
}