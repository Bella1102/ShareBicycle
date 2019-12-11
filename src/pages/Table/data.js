
export const staticData = [
    {
        id: '0',
        userName: 'Jack',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
    },
    {
        id: '1',
        userName: 'Tom',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
    },
    {
        id: '2',
        userName: 'Lily',
        sex: '1',
        state: '1',
        interest: '1',
        birthday: '2000-01-01',
        address: '北京市海淀区奥林匹克公园',
        time: '09:00'
    },
]

export const basicTableColumns = [
    {
        title:'id',
        key:'id',
        dataIndex:'id'
    },
    {
        title: 'UserName',
        key: 'userName',
        dataIndex: 'userName'
    },
    {
        title: 'Sex',
        key: 'sex',
        dataIndex: 'sex',
        render(sex){
            return sex === 1 ? 'Male' : 'Female'
        }
    },
    {
        title: 'State',
        key: 'state',
        dataIndex: 'state',
        render(state){
            let config  = {
                '1': 'Student',
                '2': 'Boss',
                '3': 'CEO',
                '4': 'Saler',
                '5': 'Worker'
            }
            return config[state];
        }
    },
    {
        title: 'Interest',
        key: 'interest',
        dataIndex: 'interest',
        render(interest) {
            let config = {
                '1': 'swim',
                '2': 'basketball',
                '3': 'football',
                '4': 'run',
                '5': 'climb',
                '6': 'ride',
                '7': 'game',
                '8': 'sing'
            }
            return config[interest];
        }
    },
    {
        title: 'Birthday',
        key: 'birthday',
        dataIndex: 'birthday'
    },
    {
        title: 'Address',
        key: 'address',
        dataIndex: 'address'
    },
    {
        title: 'Time',
        key: 'time',
        dataIndex: 'time'
    }
]

export const advancedTableColumns1 = [
    {
        title: 'id',
        key: 'id',
        width:80,
        dataIndex: 'id'
    },
    {
        title: 'UserName',
        key: 'userName',
        width: 80,
        dataIndex: 'userName'
    },
    {
        title: 'Sex',
        key: 'sex',
        width: 80,
        dataIndex: 'sex',
        render(sex) {
            return sex === 1 ? '男' : '女'
        }
    },
    {
        title: 'State',
        key: 'state',
        width: 80,
        dataIndex: 'state',
        render(state){
            let config  = {
                '1': 'Student',
                '2': 'Boss',
                '3': 'CEO',
                '4': 'Saler',
                '5': 'Worker'
            }
            return config[state];
        }
    },
    {
        title: 'Interest',
        key: 'interest',
        width: 80,
        dataIndex: 'interest',
        render(interest) {
            let config = {
                '1': 'swim',
                '2': 'basketball',
                '3': 'football',
                '4': 'run',
                '5': 'climb',
                '6': 'ride',
                '7': 'game',
                '8': 'sing'
            }
            return config[interest];
        }
    },
    {
        title: 'Birthday',
        key: 'birthday',
        width: 120,
        dataIndex: 'birthday'
    },
    {
        title: 'Address',
        key: 'address',
        width: 120,
        dataIndex: 'address'
    },
    {
        title: 'Time',
        key: 'time',
        width: 80,
        dataIndex: 'time'
    }
]

export const advancedTableColumns2 = [
    {
        title: 'id',
        key: 'id',
        width: 80,
        fixed:'left',
        dataIndex: 'id'
    },
    {
        title: 'UserName',
        key: 'userName',
        width: 120,
        dataIndex: 'userName'
    },
    {
        title: 'Sex',
        key: 'sex',
        width: 120,
        dataIndex: 'sex',
        render(sex) {
            return sex === 1 ? 'Male' : 'Female'
        }
    },
    {
        title: 'State',
        key: 'state',
        width: 120,
        dataIndex: 'state',
        render(state){
            let config  = {
                '1': 'Student',
                '2': 'Boss',
                '3': 'CEO',
                '4': 'Saler',
                '5': 'Worker'
            }
            return config[state];
        }
    },
    {
        title: 'Interest',
        key: 'interest',
        width: 120,
        dataIndex: 'interest',
        render(interest) {
            let config = {
                '1': 'swim',
                '2': 'basketball',
                '3': 'football',
                '4': 'run',
                '5': 'climb',
                '6': 'ride',
                '7': 'game',
                '8': 'sing'
            }
            return config[interest];
        }
    },
    {
        title: 'Birthday',
        key: 'birthday1',
        width: 120,
        dataIndex: 'birthday'
    },
    {
        title: 'Birthday',
        key: 'birthday2',
        width: 120,
        dataIndex: 'birthday'
    },
    {
        title: 'Birthday',
        key: 'birthday3',
        width: 120,
        dataIndex: 'birthday'
    },
    {
        title: 'Birthday',
        key: 'birthday4',
        width: 120,
        dataIndex: 'birthday'
    },
    {
        title: 'Birthday',
        key: 'birthday5',
        width: 120,
        dataIndex: 'birthday'
    },
    {
        title: 'Birthday',
        key: 'birthday6',
        width: 120,
        dataIndex: 'birthday'
    },
    {
        title: 'Birthday',
        key: 'birthday7',
        width: 120,
        dataIndex: 'birthday'
    },
    {
        title: 'Birthday',
        key: 'birthday8',
        width: 120,
        dataIndex: 'birthday'
    },
    {
        title: 'Address',
        key: 'address',
        width: 120,
        dataIndex: 'address'
    },
    {
        title: 'Time',
        key: 'time',
        width: 120,
        dataIndex: 'time'
    }
]


