(function (Scratch) {
    class HelloWorld {
        getInfo() {
            return {
                color1: '#6050ff',
                color2: '#4D40CC',
                color3: '#4D40CC',
                id: 'HELLOWORLDCCWCQR',
                name: 'HelloWorld',
                blocks: [
                    {
                        opcode: 'hello_world_out',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '输出[temp]',
                        arguments: {
                            temp:{
                                type:Scratch.ArgumentType.STRING,
                                defaultValue: 'Hello World'
                            }
                        }
                    },
                    {
                        opcode: 'hello_world_meuns',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '输出[temp][temp2]',
                        arguments: {
                            temp:{
                                type: Scratch.ArgumentType.STRING,
                                menu: 'menu_test'
                            },
                            temp2:{
                                type: Scratch.ArgumentType.STRING,
                                menu: 'menu_test'
                            }
                        }
                    },
                    {
                        opcode: 'hello_world_color',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'color[temp]',
                        arguments: {
                            temp:{
                                type: Scratch.ArgumentType.COLOR,
                                defaultValue: '#4D40CC'
                            }
                        }
                    }
                ],
                menus:{
                    menu_test:{
                        acceptReporters: true,
                        items: ['hello','world']
                    }
                }
            }
        }
        hello_world_out(args){
            return args.temp
        }
        hello_world_meuns(args){
            return args.temp
        }
        hello_world_color(args){
            return args.temp
        }
    }
    Scratch.extensions.register(new HelloWorld());
})(Scratch);
