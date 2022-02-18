import { Link } from 'react-router-dom';

const StaffList = ({ person }) => {
  return (
    <div className="staff-list">
      {person.map(staff => (
        <div className="staff-preview" key={staff.id} >
          <Link to={`/person/${staff.id}`}>
            <h2>{ staff.firstname } { staff.lastname }</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default StaffList;