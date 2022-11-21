import axios from "axios";
import {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";

const UserList = () => {
    const [users, setUser] = useState([]);
   
    useEffect(() => {
      getUsers();
    }, []);
   
    const getUsers = async () => {
      const response = await axios.get("http://localhost:5000/api/users");
      setUser(response.data);
    };

    const deleteUser = async (email) => {
      try {
        await axios.delete(`http://localhost:5000/api/users/${email}`);
        getUsers();
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <div className="columns mt-5 ml-5">
      <div className="column is-half">
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Phone</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.email}</td>
                <td>{user.salary}</td>
                <td>{user.phone}</td>
                <td>{user.cname}</td>
                <td>
                  <Button
                    to={`edit/${user.email}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Button>
                  <button
                    onClick={() => deleteUser(user.email)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
    };
export default UserList;