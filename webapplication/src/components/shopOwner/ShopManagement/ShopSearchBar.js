import React, { Component } from 'react';

export default class ShopSearchbar extends Component {
    render() {
        return (

            <div class="row fluid">

                <div class = "col-xm-12">
                    <form action="" method="POST" class="form-inline" role="form" style={Styles.form_search}>
                        <div class="form-group">
                            <input type="email" class="form-control" id="" placeholder="Search Shop" />
                            <button>
                                <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                            </button>
                        </div>
                    </form>
                </div>

                <div class = "col-xm-12">

                    <form action="" method="POST" role="form" class="form-inline" style={Styles.form_sort}>
                        <label>Sort for: </label>
                        <select name="" id="input${1/(\w+)/\u\1/g}" class="form-control" required="required">
                            <option value="">All</option>
                            <option value="">Shops are being locked</option>
                            <option value="">Shops are open</option>
                        </select>
                    </form>
                </div>
            </div>

        )
    }
};

const Styles = {
    div_main: {
        width: '100%'
    },
    form_search: {
        float: 'left',
    },
    form_sort: {
        float: 'right'
    }
}