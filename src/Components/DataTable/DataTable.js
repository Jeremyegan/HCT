import React from 'react';
import MaterialTable from 'material-table';
import axios from 'axios';

export default class DataTable extends React.Component {
  constructor(){
    super();
    this.state = {
      columns: [
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
          gender: item.gender,
          color: item.color,
          size: item.size,
          style: item.style
        }})
      this.setState({
        data: mappedRes
      })
    })
  }

  // create() {
  //   console.log(this.state)
  //   const { gender, color, size, style } = this.state
  //   const res = axios.post('/auth/inventory', { gender, color, size, style });
  //   console.log(res, "create method hit")
  //   this.setState({
  //     data: res
  //   })
  // }

  


  render(){
    return (
      <MaterialTable
        title="Inventory"
        options={{exportButton: true}}
        columns={this.state.columns}
        data={this.state.data}
        editable={{
          onRowAdd: newData => 
            new Promise(resolve => {
              setTimeout(() => {
                const data = [...this.state.data];
                data.push(newData);
                this.setState({ ...this.state, data });
                resolve();
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.state.data];
                data[data.indexOf(oldData)] = newData;
                this.setState({ ...this.state, data });
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...this.state.data];
                data.splice(data.indexOf(oldData), 1);
                this.setState({ ...this.state, data });
              }, 600);
            }),
        }}
      />
    );
  }
}