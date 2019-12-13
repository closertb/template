export const searchFields = [{
  key: 'tag',
  name: 'Tag',
}, {
  key: 'server_name',
  name: '服务名',
}];

export const fields = [{
  key: 'tag',
  name: 'Tag',
}, {
  key: 'server_name',
  name: '服务名',
}, {
  key: 'retrans_host',
  name: '转发域名',
}, {
  key: 'update_time',
  name: '更新时间',
  type: 'datetime'
}];

export const editFields = [{
  key: 'tag',
  name: 'Tag',
  disable: ({ tag }) => Boolean(tag)
}, {
  key: 'server_name',
  name: '服务名',
}, {
  key: 'retrans_host',
  name: '转发域名',
}];
