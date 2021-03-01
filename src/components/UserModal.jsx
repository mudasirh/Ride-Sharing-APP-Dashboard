import {Modal, Button} from "react-bootstrap";

const UserModal = (props) => {
  if (props.updateUserModal.user === undefined) return "";
  else {
    const {
      updateUserModal,
      onCloseModal,
      onChangeUpdateUser,
      updateUserData,
      onUpdatedUserSubmit,
      errorMsg,
    } = props;

    return (
      <>
        <Modal
          show={updateUserModal.show}
          onHide={onCloseModal}
          backdrop='static'
          // keyboard={false}
          centered
          size='md'
        >
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className='card'>
              <div className='card-header'>
                <div className='row align-items-center'>
                  <div className='col-8'>
                    <h3 className='mb-0'>Update User </h3>
                  </div>
                </div>
              </div>

              <div className='card-body'>
                <div className='form-group'>
                  <label className='form-control-label' htmlFor='username'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='username'
                    name='name'
                    className='form-control'
                    placeholder='Username'
                    value={updateUserData.name}
                    onChange={onChangeUpdateUser}
                  />
                </div>
                <div className='form-group'>
                  <label className='form-control-label' htmlFor='email'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className='form-control'
                    placeholder='email'
                    value={updateUserData.email}
                    onChange={onChangeUpdateUser}
                    name='email'
                  />
                </div>
                <div className='form-group'>
                  <label className='form-control-label' htmlFor='phone'>
                    Phone No
                  </label>
                  <input
                    type='phone'
                    id='phone'
                    className='form-control'
                    placeholder='Username'
                    value={updateUserData.phone_No}
                    onChange={onChangeUpdateUser}
                    name='phone_No'
                  />
                </div>
                <div className='form-group'>
                  <label className='form-control-label' htmlFor='password'>
                    Password
                  </label>
                  <input
                    type='password'
                    id='password'
                    className='form-control'
                    placeholder='Username'
                    value={updateUserData.password}
                    onChange={onChangeUpdateUser}
                    name='password'
                  />
                </div>
                <p className='badge badge-danger'>{errorMsg}</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={onCloseModal}>
              Close
            </Button>
            <Button
              onClick={onUpdatedUserSubmit}
              variant='primary'
              type='submit'
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
};

export default UserModal;
