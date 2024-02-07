(function (Scratch) {
    class DANWEIZH {
        getInfo() {
            return {
                color1: '#ff5947',
                color2: '#dc3d2b',
                color3: '#dc3d2b',
                id: 'DANWEIZHUANHUANKUOZHANCQR',
                name: '单位转换',
                blocks: [
                    {
                        opcode: 'DWZH_juli',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '距离 将[arg_1][s1]转换为以[s2]作为单位的数据',
                        arguments: {
                            arg_1:{
                                type:Scratch.ArgumentType.STRING,
                                defaultValue: '100'
                            },
                            s1:{
                                type:Scratch.ArgumentType.STRING,
                                menu:'DWZH_juli_menu'
                            },
                            s2:{
                                type:Scratch.ArgumentType.STRING,
                                menu:'DWZH_juli_menu'
                            }
                        }
                    },
                    {
                        opcode: 'DWZH_time',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '时间 将[arg_1][s1]转换为以[s2]作为单位的数据',
                        arguments: {
                            arg_1:{
                                type:Scratch.ArgumentType.STRING,
                                defaultValue: '1000'
                            },
                            s1:{
                                type:Scratch.ArgumentType.STRING,
                                menu:'DWZH_time_menu'
                            },
                            s2:{
                                type:Scratch.ArgumentType.STRING,
                                menu:'DWZH_time_menu'
                            }
                        }
                    },
                    {
                        opcode: 'DWZH_cunchu',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '存储 将[arg_1][s1]转换为以[s2]作为单位的数据',
                        arguments: {
                            arg_1:{
                                type:Scratch.ArgumentType.STRING,
                                defaultValue: '8'
                            },
                            s1:{
                                type:Scratch.ArgumentType.STRING,
                                menu:'DWZH_cunchu_menu'
                            },
                            s2:{
                                type:Scratch.ArgumentType.STRING,
                                menu:'DWZH_cunchu_menu'
                            }
                        }
                    },
                    {
                        opcode: 'DWZH_zhongliang',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '重量 将[arg_1][s1]转换为以[s2]作为单位的数据',
                        arguments: {
                            arg_1:{
                                type:Scratch.ArgumentType.STRING,
                                defaultValue: '100'
                            },
                            s1:{
                                type:Scratch.ArgumentType.STRING,
                                menu:'DWZH_zhongliang_menu'
                            },
                            s2:{
                                type:Scratch.ArgumentType.STRING,
                                menu:'DWZH_zhongliang_menu'
                            }
                        }
                    },
                    {
                        opcode: 'DWZH_mianji',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '面积 将[arg_1][s1]转换为以[s2]作为单位的数据',
                        arguments: {
                            arg_1:{
                                type:Scratch.ArgumentType.STRING,
                                defaultValue: '100'
                            },
                            s1:{
                                type:Scratch.ArgumentType.STRING,
                                menu:'DWZH_mianji_menu'
                            },
                            s2:{
                                type:Scratch.ArgumentType.STRING,
                                menu:'DWZH_mianji_menu'
                            }
                        }
                    }

                ],
                menus: {
                    DWZH_juli_menu:{
                        acceptReporters: true,
                        items:['毫米','厘米','分米','米','千米']
                    },
                    DWZH_time_menu:{
                        acceptReporters: true,
                        items:['毫秒','秒','分钟','小时','天']
                    },
                    DWZH_cunchu_menu:{
                        acceptReporters: true,
                        items:['Bit','B','KB','MB','GB','TB','PB','EB','ZB','YB','BB']
                    },
                    DWZH_zhongliang_menu:{
                        acceptReporters: true,
                        items:['微克','毫克','克','千克','吨']
                    },
                    DWZH_mianji_menu:{
                        acceptReporters: true,
                        items:['平方毫米','平方厘米','平方分米','平方米','公顷','平方千米']
                    },
                }
            }
        }
        DWZH_juli(args){
            const danwei_list = ['毫米','厘米','分米','米','千米'];
            const danweic_list = [10,10,10,1000];
            const danwei1 = danwei_list.indexOf(args.s1);
            const danwei2 = danwei_list.indexOf(args.s2);
            let x = args.arg_1;
            if(danwei1 > danwei2){
                let i = danwei1
                while(i !== danwei2){
                    x = x * danweic_list[i-1];
                    i -= 1;
                }
                return x;
            }else if(danwei1 < danwei2){
                let i = danwei1
                while(i !== danwei2){
                    x = x / danweic_list[i];
                    i += 1;
                }
                return x;
            }else{
                return args.arg_1;
            }
        }
        DWZH_time(args){
            const danwei_list = ['毫秒','秒','分钟','小时','天'];
            const danweic_list = [1000,60,60,24];
            const danwei1 = danwei_list.indexOf(args.s1);
            const danwei2 = danwei_list.indexOf(args.s2);
            let x = args.arg_1;
            if(danwei1 > danwei2){
                let i = danwei1
                while(i !== danwei2){
                    x = x * danweic_list[i-1];
                    i -= 1;
                }
                return x;
            }else if(danwei1 < danwei2){
                let i = danwei1
                while(i !== danwei2){
                    x = x / danweic_list[i];
                    i += 1;
                }
                return x;
            }else{
                return args.arg_1;
            }
        }
        DWZH_cunchu(args){
            const danwei_list = ['Bit','B','KB','MB','GB','TB','PB','EB','ZB','YB','BB'];
            const danweic_list = [8,1024,1024,1024,1024,1024,1024,1024,1024,1024];
            const danwei1 = danwei_list.indexOf(args.s1);
            const danwei2 = danwei_list.indexOf(args.s2);
            let x = args.arg_1;
            if(danwei1 > danwei2){
                let i = danwei1
                while(i !== danwei2){
                    x = x * danweic_list[i-1];
                    i -= 1;
                }
                return x;
            }else if(danwei1 < danwei2){
                let i = danwei1
                while(i !== danwei2){
                    x = x / danweic_list[i];
                    i += 1;
                }
                return x;
            }else{
                return args.arg_1;
            }
        }
        DWZH_zhongliang(args){
            const danwei_list = ['微克','毫克','克','千克','吨'];
            const danweic_list = [1000,1000,1000,1000];
            const danwei1 = danwei_list.indexOf(args.s1);
            const danwei2 = danwei_list.indexOf(args.s2);
            let x = args.arg_1;
            if(danwei1 > danwei2){
                let i = danwei1
                while(i !== danwei2){
                    x = x * danweic_list[i-1];
                    i -= 1;
                }
                return x;
            }else if(danwei1 < danwei2){
                let i = danwei1
                while(i !== danwei2){
                    x = x / danweic_list[i];
                    i += 1;
                }
                return x;
            }else{
                return args.arg_1;
            }
        }
        DWZH_mianji(args){
            const danwei_list = ['平方毫米','平方厘米','平方分米','平方米','公顷','平方千米'];
            const danweic_list = [100,100,100,10000,100];
            const danwei1 = danwei_list.indexOf(args.s1);
            const danwei2 = danwei_list.indexOf(args.s2);
            let x = args.arg_1;
            if(danwei1 > danwei2){
                let i = danwei1
                while(i !== danwei2){
                    x = x * danweic_list[i-1];
                    i -= 1;
                }
                return x;
            }else if(danwei1 < danwei2){
                let i = danwei1
                while(i !== danwei2){
                    x = x / danweic_list[i];
                    i += 1;
                }
                return x;
            }else{
                return args.arg_1;
            }
        }
    }

    Scratch.extensions.register(new DANWEIZH());
})(Scratch);
