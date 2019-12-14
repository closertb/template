import React from 'react';
import { Button, Popconfirm } from 'antd';
import { connect } from 'dva';
import { EnhanceTable, WithSearch } from 'antd-doddle';
import { bind } from 'antd-doddle/decorator';
import { fields, searchFields } from './fields';

@connect(({ home }) => ({ ...home }), dispatch => ({
  onSearch(payload) {
    dispatch({ type: 'home/updateSearch', payload });
    dispatch({ type: 'home/getList' });
  }
}))
export default class Root extends React.PureComponent {
  getExtraFields() {
    const { actions: { onDelete } } = this.props;
    return [
      {
        key: 'operate',
        name: '操作',
        width: 120,
        fixed: 'right',
        render: (text, detail) => (
          <div>
            <a onClick={this.handleOperate('update', detail)}>修改</a>
            <Popconfirm title="确认删除？" onConfirm={() => { onDelete({ id: detail.id }); }}>
              <a className="ml-10">删除</a>
            </Popconfirm>
          </div>)
      }
    ];
  }

  @bind
  handleAction() {
    const { onSearch } = this.props;
    onSearch({});
  }

  render() {
    const { loading, datas, total, search, onSearch } = this.props;
    const tableProps = {
      search,
      datas,
      fields,
      loading: { list: loading.getList },
      onSearch,
      total
    };
    const searchProps = {
      fields: searchFields,
      search,
      pageName: 'pn',
      onSearch,
    };
    return (
      <div>
        <Button type="primary" title="确认删除？" className="mb-10" onClick={() => this.handleAction()}>
          添加
        </Button>
        <WithSearch {...searchProps} />
        <div className="pageContent">
          <EnhanceTable {...tableProps} />
        </div>
      </div>
    );
  }
}
