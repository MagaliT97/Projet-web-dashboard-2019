import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class TableRowDepense extends Component {

  delete=()=> {
    axios.get('http://localhost:4000/depense/delete/'+this.props.obj._id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
    window.location.reload();
  }

  render() {
    return (
        <tr> 
          <td>
            {this.props.obj.categorie}
          </td>
          <td>
            {this.props.obj.description}
          </td>
          <td>
            {this.props.obj.montant}
          </td>
          <td>
            {this.props.obj.date}
          </td>
          <td>
          <Link to={"/editDepense/"+this.props.obj._id} className="btn btn-primary" >Modifier</Link>
          </td>
          <td>
           <button className="btn btn-danger" onClick={this.delete}>Supprimer</button>
          </td>
        </tr>
    );
  }
}

export default TableRowDepense;