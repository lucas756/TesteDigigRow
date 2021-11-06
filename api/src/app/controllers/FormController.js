
class FormController {
  async store(req, res) {

    const data = [
      {
        key: 'firstName',
        label: 'First Name',
        type: 'text',
        required: true
      },
      {
        key: 'phoneNumber',
        label: 'Phone Number',
        type: 'tel',
        required: true
      }, 
      {
        key: 'birthDate',
        label: 'Birth Date',
        type: 'date',
        required: false
      },
      {
        key: 'sendButton',
        label: 'Submit Form',
        type: 'submit'
      }
    ]

    return res.json(data);
  }
}

  export default new FormController();