<Card style={{ margin: "10px" }} bg={"dark"}>
  <Card.Body className="d-flex justify-content-center align-items-center">
    <Table striped hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Phone</th>
          <th>Country</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Billy</td>
          <td>Herrington</td>
          <td>billyherrington@niconico.boy</td>
          <td>300$</td>
          <td>870066769</td>
          <td>Japan</td>
        </tr>
      </tbody>
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
            <td className="d-flex justify-content-end ">
              <Button to={`edit/${user.email}`} variant="warning" style={{ margin: "0.25rem" }}>
                Edit
              </Button>
              <Button
                onClick={() => deleteUser(user.email)}
                variant="danger"
                style={{ margin: "0.25rem" }}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Card.Body>
</Card>;
