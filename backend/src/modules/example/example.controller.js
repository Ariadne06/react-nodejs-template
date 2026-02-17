// Example controller - contains business logic
exports.getAll = async (req, res) => {
  try {
    // Your logic here
    res.json({
      status: 'success',
      message: 'Get all examples',
      data: []
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    // Your logic here
    res.json({
      status: 'success',
      message: `Get example with id: ${id}`,
      data: {}
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.create = async (req, res) => {
  try {
    // Your logic here
    res.status(201).json({
      status: 'success',
      message: 'Example created',
      data: req.body
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    // Your logic here
    res.json({
      status: 'success',
      message: `Example with id: ${id} updated`,
      data: req.body
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    // Your logic here
    res.json({
      status: 'success',
      message: `Example with id: ${id} deleted`
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
};
