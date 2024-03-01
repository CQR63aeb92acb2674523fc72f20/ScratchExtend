const CQR_CIB_picture = "data:image/png;base64,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"

const CQR_CIB_icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAA7oAAAO6AHcdKD4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAvZJREFUeJzt2U+oplMcwPHPZZhbQ0lSRFEYlNloXFIKyYZEYUGKWbAYqVn6u1KyYCE1LDQpEZGUnVn4t5Cr/ItEsZGMhqYRzRh+Fufc3Li/a+Y6731f9fvW03PO857zO+f5vufP+zzvXEQo/slR0+7ArFJiEkpMQolJKDEJJSahxCSUmIQSk1BiEkpMQolJKDEJJSahxCSUmIQSk1BiEkpMQolJKDEJJSZhw4TinoarcPKE4i/xHXbj29GBJyHmNjyNjROIvRK/YhueHxl0bvAfbpuwV5PyKr4YGfxvzOE8XItfcJImaQijR8z5mpQPcf3g2Bkf44Le9gejgo5efJfi/T447moc7OehX3LtSgklJmHWxWzAdlPo56yLuQ9P4BVtx1s3ZlnMAu7v6evwJk5Zr8ZnRcycNmWu6PlNeFabSi/ga1yI97BlPTo0K2J2aFPmkZ5/DOfgc9yBrXgbp+NdXDPxHkXEyGMhGotHWOdgr3dDRFwdEX/0a1uXldsYEc/1cociYnu/vtivLYy8l0k9RB4uJ2jPOMdoI+YtfKJNrQfx/rKyB3ArvsRDvfzZvex4pjxiXu7lP4qI+Yh4qeffiYijV6l3+7JRtm8SI2aaYu7uZfdHxOaI2LbsRs88jPpXRsRP8RdDxUxr8d2CR3v6LhzC4z1/j7YL/Ru7camBT9TLmYaY4/Ai5vGUtsY8g+O1VxW7jiDWZ/0YzjTE7MRmfKpt0/fiMuzBnVPoz4qst5gbcQt+7ulz8QBC+72yZw0xl3aloW/cRm/Xe/v5xOTz/fheW0e+wSKOxZN4fQ3tzeHUnv5hDfXzwBFDRc/jR+1md2ojI+NyXNTL78Jva2jvDNysST7LwBdko8XQ1oyHRwddhQO4Ca+NDDoJMXAJLtZGTtq2NpXXMlKW2Ic38NV/iLEikxLzv2dWnq5njhKTUGISSkxCiUkoMQklJqHEJJSYhBKTUGISSkxCiUkoMQklJqHEJJSYhBKTUGISSkxCiUkoMQl/AvwA+XsTa908AAAAAElFTkSuQmCC"

const CQR_CIB_extensionId = "CCWCQRCIB"

/**创建一个打开图片的函数 */
function openImageFile() {
    var fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';

    return new Promise(function(resolve, reject) {
    fileInput.onchange = function(event) {
        var file = event.target.files[0];
        var reader = new FileReader();

        reader.onload = function(e) {
            var base64String = e.target.result.split(',')[1];
            resolve(base64String);
        };

        reader.onerror = function(error) {
            reject(error);
        };

        reader.readAsDataURL(file);
    };

    fileInput.click();
    });
}

/** @typedef {string|number|boolean} SCarg 来自Scratch圆形框的参数，虽然这个框可能只能输入数字，但是可以放入变量，因此有可能获得数字、布尔和文本（极端情况下还有 null 或 undefined，需要同时处理 */
class CCWCQRCIB {
    constructor(runtime) {
        this.runtime = runtime;
        /** 被挂钩的 runtime._step 函数 */
        this.step = this.runtime._step;
        this._formatMessage = runtime.getFormatMessage({
            "zh-cn": {
                "CCWCQRCIB.name": "CIB",
                "CCWCQRCIB.docs": "📖拓展教程",
                "CCWCQRCIB.openfile": "打开图片并编码为base64",
                "CCWCQRCIB.downloadfile": "将bease64[str]以图片格式下载",
            },
            en: {
                "CCWCQRCIB.name": "CIB",
                "CCWCQRCIB.docs": "📖 Tutorial",
                "CCWCQRCIB.openfile": "Open the image and encode it as base64",
                "CCWCQRCIB.downloadfile": "Download bease64 [str] in image format",
            }
        })
    }

    /**
     * 翻译
     * @param {string} id
     * @return {string}
     */

    formatMessage(id) {
        return this._formatMessage({
            id,
            default: id,
            description: id
        });
    }

    getInfo() {
        return {
            id: CQR_CIB_extensionId, // 拓展id
            name: this.formatMessage("CCWCQRCIB.name"), // 拓展名
            blockIconURI: CQR_CIB_icon,
            menuIconURI: CQR_CIB_icon,
            color1: "#212121",
            color2: "#B32B2B",
            blocks: [
                {
                    blockType: "button",
                    text: this.formatMessage('CCWCQRCIB.docs'),
                    onClick: this.docs,
                },
                {
                    opcode: "openlife",
                    blockType: "reporter",
                    text: this.formatMessage("CCWCQRCIB.openfile"),
                    arguments: {},
                },
                {
                    opcode: "downloadlife",
                    blockType: "command",
                    text: this.formatMessage("CCWCQRCIB.downloadfile"),
                    arguments: {
                        str: {
                            type: "string",
                            defaultValue: '',
                        }
                    },
                },
            ],
        };
    }

    /** 打开教程 */
    docs() {
        let a = document.createElement('a');
        a.href = "https://www.ccw.site/post/d6d96e80-3f58-4a19-b7e6-c567d3a6a583";
        a.rel = "noopener noreferrer";
        a.target = "_blank";
        a.click();
    }
    /** 打开图片*/
    openlife() {
        openImageFile().then(function(base64String) {
            return base64String;
        }).catch(function(error) {
            return error;
        });
    }
    /** 下载图片*/
    downloadlife() {
        console.log("test")
    }
}

window.tempExt = {
    Extension: CCWCQRCIB,
    info: {
        name: "CCWCQRCIB.name",
        description: "CCWCQRCIB.descp",
        extensionId: CQR_CIB_extensionId,
        iconURL: CQR_CIB_picture,
        insetIconURL: CQR_CIB_icon,
        featured: true,
        disabled: false,
        collaborator: "CQR @ CCW"
    },
    l10n: {
        "zh-cn": {
            "CCWCQRCIB.name": "CIB",
            "CCWCQRCIB.descp": "让Scratch拥有图片"
        },
        en: {
            "CCWCQRCIB.name": "CIB",
            "CCWCQRCIB.descp": "Enable Scratch to have images"
        }
    }
};
