import React from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

export default class DataTable extends React.Component {
  constructor(){
    super();
    this.state = {
      columns: [
        { title: 'ID', field: 'id' },
        { title: 'style', field: 'style' },
        { title: 'gender', field: 'gender' },
        { title: 'color', field: 'color' },
        { title: 'size', field: 'size' }

    // { title: 'show', field: 'show', lookup: { 34: 'Matilda', 3: 'Paris' } }, example of drop down in edit
      ],
      data: []
    };
  }

  componentDidMount() {
    axios.get('/auth/inventory').then(res => {
      console.log(res.data);
      const mappedRes = res.data.map(item => {
        return {
          id: item.item_id,
          style: item.style,
          gender: item.gender,
          color: item.color,
          size: item.size
        }})
      this.setState({
        data: mappedRes
      })
    })
  }
}