//新增数据函数
function addrow() {
    var table = document.getElementById('table')

    // 获取插入的位置
    var length = table.rows.length
    // 插入行
    var newrow = table.insertRow(length)
    // 插入列
    var namecol = newrow.insertCell(0)
    var phonecol = newrow.insertCell(1)
    var opcol = newrow.insertCell(2)
    // 修改节点文本内容
    namecol.innerHTML = ' '
    phonecol.innerHTML = ' '
    opcol.innerHTML = '<button onclick="edit(this)">编辑</button><button onclick="delrow(this)">删除</button>'
}
// 删除数据函数
function delrow(row_num) {
    // console.log(row_num)
    var cellnum = row_num.parentNode.parentNode
    // console.log(cellnum)
    cellnum.parentNode.removeChild(cellnum)
}
// 编辑数据函数
function edit(row_num) {
    var cellnum = row_num.parentNode.parentNode
    console.log(cellnum)
    var name = cellnum.cells[0]
    var phone = cellnum.cells[1]
    var op = cellnum.cells[2]
    // console.log(name, phone)
    name.innerHTML = '<form> <input type="text" id="name" placeholder="请输入姓名" style = "width:80px">  </form>'
    phone.innerHTML = '<form> <input type="text" id="phone" placeholder="请输入联系方式" style = "width:100px">  </form>'
    op.innerHTML = '<button type = "submit" onclick="saverow(this)">保存</button>'
    return phone
}
// 保存数据函数
function saverow(row_num) {
    var new_name_element = document.getElementById('name')
    var new_name = new_name_element.value
    // console.log(new_name)
    var new_phone_element = document.getElementById('phone')
    var new_phone = new_phone_element.value
    // console.log(new_name)
    cellnum = row_num.parentNode.parentNode
    var name = cellnum.cells[0]
    var phone = cellnum.cells[1]
    var op = cellnum.cells[2]
    name.innerHTML = new_name
    phone.innerHTML = new_phone
    op.innerHTML = '<button onclick="edit(this)">编辑</button><button onclick="delrow(this)">删除</button>'
}
// 搜索数据函数
function search() {
    var search_elements = document.getElementById('search')
    var search_values = search_elements.value
    console.log(search_values)
    var table = document.getElementById('table')
    var rows = table.getElementsByTagName('tr')
    // 遍历每一行
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i]
        // 遍历单元格
        for (var j = 0; j < row.cells.length; j++) {
            var cell_values = row.cells[j].innerText
            // console.log(cell_values)
            var cell = row.cells[j]
            console.log(cell)
            if (search_values == cell_values) {
                // cell.classList.add('highlight')
                cell.style.backgroundColor = 'yellow'
            }
            else {
                cell.style.backgroundColor = 'white'
            }
        }
    }
}