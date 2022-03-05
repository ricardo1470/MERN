import React, { Component } from 'react';

class Body extends Component {

    constructor() {
        super();
        this.state = {
            title : '',
            description : '',
            tasks : [],
            _id : ''
        }
    }

    addTask = (e) => {
        e.preventDefault();
        if(this.state._id) {
            fetch(`/api/task/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                M.toast({html: 'Task Updated'});
                this.setState({
                    title : '',
                    description : '',
                    _id : ''
                })
                this.fetchTasks();
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            fetch('/api/task', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    //console.log(data);
                    M.toast({html: 'Task Added'});
                    this.setState({
                        title : '',
                        description : ''
                    });
                    this.fetchTasks();
                })
                .catch(err => console.log(err));
        }
    }

    componentDidMount() {
        this.fetchTasks();
    };

    fetchTasks = () => {
        fetch('/api/task')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ tasks : data });
            })
            .catch(err => console.log(err));
    }

    updateTask = (id) => {
        fetch(`/api/task/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    title : data.title,
                    description : data.description,
                    _id : data._id
                });
            })
            .catch(err => console.log(err));
            this.fetchTasks();
    }

    deleteTask = (id) => {
        if(confirm('Are you sure you want to delete this task?')) {
            fetch(`/api/task/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    M.toast({html: 'Task Deleted'});
                    this.fetchTasks();
                })
                .catch(err => console.log(err));
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name] : value
        });
    }

    render() {
        return (
            <div className="container" style={{paddin: '2px', marginTop: '12px'}}>
                <div className="row">
                    <div className="col s5 m6">
                        <div className="card">
                            <div className="card-content">
                                <form onSubmit={this.addTask}>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input value={this.state.title} name='title' onChange={this.handleChange} type="text" placeholder='Task Title' />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <textarea value={this.state.description} name='description' onChange={this.handleChange} className='materialize-textarea' type="text" placeholder='Task Description'></textarea>
                                        </div>
                                    </div>
                                    <button className="btn light-blue darken-4" type="submit" name="action">
                                        Submit<i className="material-icons right">send</i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col s7 m6">
                        <table className="striped centered">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.tasks.map(task => {
                                        return (
                                            <tr key={task._id}>
                                                <td>{task.title}</td>
                                                <td>{task.description}</td>
                                                <td>
                                                    <button className="btn light-blue darken-4" onClick={() => this.updateTask(task._id) }>
                                                        <i className="material-icons">update</i>
                                                    </button>
                                                    <button className="btn light-blue darken-4" style={{margin: '6px'}} onClick={() => this.deleteTask(task._id)}>
                                                        <i className="material-icons">delete</i>
                                                        </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;
