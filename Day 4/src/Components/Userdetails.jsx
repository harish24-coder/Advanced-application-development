import React from "react";
import './Userdetails.css';

export default function Table() {
  return (
    <div className="container-fluid">
      {/* Centering the table */}
      <div className="row justify-content-center">
        <div className="col-lg-8"> {/* Adjust the column width as needed */}
          {/* Booking List */}
          <div className="row">
            <div className="col">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Pax</th>
                    <th scope="col">Remarks</th>
                    <th scope="col">Task</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>mark@test.com</td>
                    <td>3</td>
                    <td>With baby</td>
                    <td>
                      <button type="submit" className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>jacob@google.com</td>
                    <td>7</td>
                    <td />
                    <td>
                      <button type="submit" className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>larry@twitter.com</td>
                    <td>2</td>
                    <td />
                    <td>
                      <button type="submit" className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>{" "}
            {/* Booking List col*/}
          </div>{" "}
          {/* Booking List row*/}
        </div>
      </div>
    </div>
  );
}