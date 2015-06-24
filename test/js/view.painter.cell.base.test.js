'use strict';

describe('view.painter.cell.base', function() {
    var grid, cellPainter;

    function createGridMock() {
        var mock = {
            keyMap: {
                BACKSPACE: 8,
                TAB: 9,
                F5: 116
            },
            keyName: {
                8: 'BACKSPACE',
                9: 'TAB',
                116: 'F5'
            },
            options: {
                toolbar: {}
            },
            option: function(name) {
                return this.options[name];
            },
            focusIn: function() {},
            updateLayoutData: function() {},
            dataModel: new Collection.Base(),
            columnModel: new Data.ColumnModel()
        };
        mock.dimensionModel = new Model.Dimension({
            grid: mock
        });
        mock.renderModel = new Model.Renderer({
            grid: mock
        });
        mock.focusModel = new Model.Focus({
            grid: mock
        });
        mock.dataModel = new Data.RowList([], {
            grid: mock
        });
        return mock;
    }

    beforeEach(function() {
        grid = createGridMock();
        grid.columnModel.set('columnModelList', [
            {
                title: 'c1',
                columnName: 'c1',
                width: 30
            }, {
                title: 'c2',
                columnName: 'c2',
                width: 40
            }
        ]);
        cellPainter = new View.Base.Painter.Cell({
            grid: grid
        });
    });

    afterEach(function() {
        cellPainter.destroy();
    });

    describe('_getClassNameList()', function() {
        var classNameList;

        beforeEach(function() {
            grid.focusModel.focus(0, 'c1');
        });

        it('select된 row는 selected 클래스를 반환한다.', function() {
            classNameList = cellPainter._getClassNameList({
                columnName: 'c2',
                rowKey: 0,
                className: '',
                isEditable: false,
                isDisabled: false
            });
            expect(classNameList.length).toBe(1);
            expect(classNameList).toContain('selected');
        });

        it('focus된 row는 selected, focused 클래스 반환한다.', function() {
            classNameList = cellPainter._getClassNameList({
                columnName: 'c1',
                rowKey: 0,
                className: '',
                isEditable: false,
                isDisabled: false
            });
            expect(classNameList.length).toBe(2);
            expect(classNameList).toContain('selected');
            expect(classNameList).toContain('focused');
        });

        it('isEditable 이 true 라면 editable 클래스를 포함한다.', function() {
            classNameList = cellPainter._getClassNameList({
                columnName: 'c1',
                rowKey: 0,
                className: '',
                isEditable: true,
                isDisabled: false
            });
            expect(classNameList.length).toBe(3);
            expect(classNameList).toContain('selected');
            expect(classNameList).toContain('focused');
            expect(classNameList).toContain('editable');
        });

        it('isDisabled 가 true 라면 disabled 클래스를 포함한다.', function() {
            classNameList = cellPainter._getClassNameList({
                columnName: 'c1',
                rowKey: 0,
                className: '',
                isEditable: true,
                isDisabled: true
            });
            expect(classNameList.length).toBe(4);
            expect(classNameList).toContain('selected');
            expect(classNameList).toContain('focused');
            expect(classNameList).toContain('editable');
            expect(classNameList).toContain('disabled');
        });

        it('정의된 className 이 있다면, 해당 className 을 포함하여 반환한다.', function() {
            classNameList = cellPainter._getClassNameList({
                columnName: 'c1',
                rowKey: 0,
                className: 'rowClass',
                isEditable: true,
                isDisabled: true
            });
            expect(classNameList.length).toBe(5);
            expect(classNameList).toContain('selected');
            expect(classNameList).toContain('focused');
            expect(classNameList).toContain('editable');
            expect(classNameList).toContain('disabled');
            expect(classNameList).toContain('rowClass');
        });
    });

    describe('getHtml()', function() {
        it('html 문자열을 생성한다.', function() {
            var html = cellPainter.getHtml({
                columnName: 'c1',
                rowKey: 0,
                className: '',
                isEditable: true,
                isDisabled: true
            });
            expect(html).toEqual('<td columnName="c1"  class="editable disabled"  align="left" edit-type="normal"></td>');
        });

        describe('beforeText와 afterText가 설정되었을 때 ', function() {
            beforeEach(function() {
                grid.columnModel.set('columnModelList', [
                    {
                        columnName: 'c1',
                        editOption: {
                            type: 'normal',
                            beforeText: 'Before',
                            afterText: 'After'
                        }
                    }
                ]);
                cellPainter.getContentHtml = function() {
                    return 'TEXT';
                };
            });

            it('실제값의 앞뒤로 span태그로 감싼 문자열을 추가해준다.', function() {
                var $cell = $(cellPainter.getHtml({
                    columnName: 'c1',
                    rowKey: 0
                }));
                expect($cell.html()).toEqual('<span>Before</span>TEXT<span>After</span>');
            });
        });
    });

    describe('redraw()', function() {
        it('주어진 요소의 HTML 내용을 갱신한다.', function() {
            var $td = $(cellPainter.getHtml({
                columnName: 'c1',
                rowKey: 0,
                className: 'rowClass',
                isEditable: true,
                isDisabled: true
            }));

            cellPainter.redraw({
                columnName: 'c1',
                rowKey: 0,
                className: 'rowClass',
                isEditable: true,
                isDisabled: false
            }, $td);

            expect($td.hasClass('editable')).toBe(true);
            expect($td.hasClass('disabled')).toBe(false);
        });
    });

    describe('_getCellData, getRowKey, getColumnName, _getCellAddress 확인', function() {
        var $table = $('<table />'),
            $td;

        beforeEach(function() {
            var html;
            //tr 은 Row Painter 에서 생성해주기 때문에 해당 test case 에서는 문자열로 넣어준다.
            html = '<tr key="0">';
            html += cellPainter.getHtml({
                columnName: 'c1',
                rowKey: 0,
                className: 'rowClass',
                isEditable: true,
                isDisabled: true
            });
            html += cellPainter.getHtml({
                columnName: 'c2',
                rowKey: 0,
                className: 'rowClass',
                isEditable: true,
                isDisabled: false
            });
            html += '</tr>';
            $table.html(html);
        });

        it('getRowKey 의 동작을 확인한다.', function() {
            $td = $table.find('td:first');
            expect(cellPainter.getRowKey($td)).toBe('0');
            $td = $table.find('td:last');
            expect(cellPainter.getRowKey($td)).toBe('0');
        });

        it('getColumnName 의 동작을 확인한다.', function() {
            $td = $table.find('td:first');
            expect(cellPainter.getColumnName($td)).toBe('c1');
            $td = $table.find('td:last');
            expect(cellPainter.getColumnName($td)).toBe('c2');
        });

        it('_getCellAddress 의 동작을 확인한다.', function() {
            $td = $table.find('td:first');
            expect(cellPainter._getCellAddress($td)).toEqual({
                rowKey: '0',
                columnName: 'c1'
            });
            $td = $table.find('td:last');
            expect(cellPainter._getCellAddress($td)).toEqual({
                rowKey: '0',
                columnName: 'c2'
            });
        });

        it('_getCellData 의 동작을 확인한다.', function() {
            spyOn(grid.renderModel, 'getCellData');
            $td = $table.find('td:first');
            cellPainter._getCellData($td);
            expect(grid.renderModel.getCellData).toHaveBeenCalledWith('0', 'c1');
        });
    });

    describe('_getParamForKeyDownSwitch()', function() {
        it('keyEvent 처리에 필요한 파라미터를 반환하는지 확인한다.', function() {
            var keyDownEvent,
                param;

            keyDownEvent = {
                keyCode: 116,
                which: 116,
                target: '<div>'
            };
            grid.focusModel.focus(0, 'c1');

            param = cellPainter._getParamForKeyDownSwitch(keyDownEvent);
            expect(param.keyDownEvent).toEqual(keyDownEvent);
            expect(param.$target.is('div')).toBe(true);
            expect(param.focusModel).toEqual(grid.focusModel);
            expect(param.rowKey).toEqual(0);
            expect(param.columnName).toEqual('c1');
            expect(param.keyName).toEqual('F5');
        });
    });

    describe('setKeyDownSwitch()', function() {
        it('이미 존재하는 keyDownSwitch에 함수를 override 한다.', function() {
            var newFunction = function() {};
            expect(cellPainter._keyDownSwitch.ENTER).toBeDefined();
            expect(cellPainter._keyDownSwitch.ENTER).not.toEqual(newFunction);
            cellPainter.setKeyDownSwitch('ENTER', newFunction);
            expect(cellPainter._keyDownSwitch.ENTER).toEqual(newFunction);
        });

        it('존재하지 않는 keyDownSwitch를 추가한다.', function() {
            var newFunction = function() {};
            expect(cellPainter._keyDownSwitch.F5).not.toBeDefined();
            cellPainter.setKeyDownSwitch('F5', newFunction);
            expect(cellPainter._keyDownSwitch.F5).toEqual(newFunction);
        });

        it('첫번째 인자에 Object 형태로 추가한다..', function() {
            var switchObject = {
                'ESC': function() {},
                'F1': function() {},
                'F2': function() {},
                'F3': function() {}
            };
            expect(cellPainter._keyDownSwitch.TAB).toBeDefined();
            cellPainter.setKeyDownSwitch(switchObject);
            expect(cellPainter._keyDownSwitch.ESC).toEqual(switchObject.ESC);
            expect(cellPainter._keyDownSwitch.F1).toEqual(switchObject.F1);
            expect(cellPainter._keyDownSwitch.F2).toEqual(switchObject.F2);
            expect(cellPainter._keyDownSwitch.F3).toEqual(switchObject.F3);
            expect(cellPainter._keyDownSwitch.TAB).toBeDefined();
        });
    });

    describe('_executeKeyDownSwitch()', function() {
        it('정의되어 있는 keyDownSwitch 를 수행한다.', function() {
            var callback = jasmine.createSpy('callback'),
                keyDownEvent = {
                    keyCode: grid.keyMap.F5,
                    which: grid.keyMap.F5,
                    target: '<div>'
                },
                result;
            cellPainter.setKeyDownSwitch('F5', callback);
            result = cellPainter._executeKeyDownSwitch(keyDownEvent);

            expect(callback).toHaveBeenCalled();
            expect(result).toBe(true);
        });

        it('정의되어있지 않은 keyDownSwitch 를 수행할 경우 defaultAction 을 호출한다.', function() {
            var callback = jasmine.createSpy('callback'),
                keyDownEvent = {
                    keyCode: grid.keyMap.BACKSPACE,
                    which: grid.keyMap.BACKSPACE,
                    target: '<div>'
                },
                result;
            expect(cellPainter._keyDownSwitch.BACKSPACE).not.toBeDefined();
            cellPainter.setKeyDownSwitch('defaultAction', callback);
            result = cellPainter._executeKeyDownSwitch(keyDownEvent);
            expect(callback).toHaveBeenCalled();
            expect(result).toBe(false);
        });
    });

    describe('_onKeyDown', function() {
        var callback,
            keyDownEvent;

        beforeEach(function() {
            callback = jasmine.createSpy('callback');
            keyDownEvent = {
                keyCode: grid.keyMap.TAB,
                which: grid.keyMap.TAB,
                target: '<div>',
                preventDefault: jasmine.createSpy('callback')
            };
        });

        it('정의된 keyDownSwitch 를 수행한다면 keyDownEvent.preventDefault() 를 호출한다.', function() {
            cellPainter.setKeyDownSwitch('TAB', callback);
            cellPainter._onKeyDown(keyDownEvent);
            expect(callback).toHaveBeenCalled();
            expect(keyDownEvent.preventDefault).toHaveBeenCalled();
        });

        it('정의되지 않은 keyDownSwitch 를 수행한다면 keyDownEvent.preventDefault() 를 호출하지 않는다.', function() {
            keyDownEvent.keyCode = keyDownEvent.which = grid.keyMap.F5;
            cellPainter._onKeyDown(keyDownEvent);
            expect(keyDownEvent.preventDefault).not.toHaveBeenCalled();
        });
    });

    describe('focusOut()', function() {
       it('this.grid.focusClipboard 를 수행하는지 확인한다.', function() {
           grid.focusClipboard = jasmine.createSpy('focusClipboard');
           cellPainter.focusOut();
           expect(grid.focusClipboard).toHaveBeenCalled();
       });
    });

    describe('onModelChange()', function() {
        var $tr;

        beforeEach(function() {
            var html;

            cellPainter.redraw = jasmine.createSpy('redraw');
            cellPainter.setElementAttribute = jasmine.createSpy('setElementAttribute');
            //tr 은 Row Painter 에서 생성해주기 때문에 해당 test case 에서는 문자열로 넣어준다.
            html = '<tr key="0">';
            html += cellPainter.getHtml({
                columnName: 'c1',
                rowKey: 0,
                className: 'rowClass',
                isEditable: true,
                isDisabled: true
            });
            html += cellPainter.getHtml({
                columnName: 'c2',
                rowKey: 0,
                className: 'rowClass',
                isEditable: true,
                isDisabled: false
            });
            html += '</tr>';
            $tr = $(html);
        });

        describe('redrawAttributes 에 해당하는 값이 변경된 경우', function() {
            it('redraw 가 호출되었는지 확인한다.', function() {
                var cellData = {
                    columnName: 'c1',
                    rowKey: 0,
                    changed: ['isEditable']
                };
                cellPainter.onModelChange(cellData, $tr);
                expect(cellPainter.redraw).toHaveBeenCalled();
                expect(cellPainter.setElementAttribute).not.toHaveBeenCalled();
            });
        });

        describe('redrawAttributes 에 해당하지 않는 값이 변경된 경우', function() {
            it('setElementAttribute 를 호출하였는지 확인한다.', function() {
                var cellData = {
                    columnName: 'c1',
                    rowKey: 0,
                    changed: ['className']
                };
                cellPainter.onModelChange(cellData, $tr);
                expect(cellPainter.redraw).not.toHaveBeenCalled();
                expect(cellPainter.setElementAttribute).toHaveBeenCalled();
            });
        });
    });
});