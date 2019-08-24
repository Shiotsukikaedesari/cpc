<template>
    <div class="container">
        <div class="form-box">
            <!-- input的text验证 STR -->
            <div class="form-type">
                <div class="form-elem">
                    <label for="text">{{label}}</label>
                    <input type="text" id="text" :placeholder="placeholder">
                    </div>
                <div class="form-valid">
                    <span class="valid-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-check-circle-fill"></use>
                        </svg>
                    </span>
                    <span class="valid-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-close-circle-fill"></use>
                        </svg>
                    </span>
                    <span class="valid-msg">{{message}}</span>
                </div>
            </div>
            <!-- input的password验证 END -->
            <!-- input的password验证 STR -->
            <div class="form-type">
                <div class="form-elem">
                    <label for="password">{{label}}</label>
                    <input type="password" id="password" :placeholder="placeholder">
                    <span class="valid-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-eyeclose-fill"></use>
                        </svg>
                    </span>
                    <span class="valid-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-eye-fill"></use>
                        </svg>
                    </span>
                    </div>
                <div class="form-valid">
                    <span class="valid-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-check-circle-fill"></use>
                        </svg>
                    </span>
                    <span class="valid-icon">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-close-circle-fill"></use>
                        </svg>
                    </span>
                    <span class="valid-msg">{{message}}</span>
                </div>
            </div>
            <!-- input的password验证 END -->
            <!-- 单选框验证 STR -->
            <div class="form-type">
                <div class="form-elem">
                    <label for="text"></label>
                    <input type="text" id="text">
                    </div>
                <div class="form-valid">
                    <span class="valid-icon"></span><span class="valid-msg"></span>
                </div>
            </div>
            <!-- 单选框验证 END -->
            <!-- 多选框验证 STR -->
            <div class="form-type">
                <div class="form-elem">
                    <label for="text"></label>
                    <input type="text" id="text">
                    </div>
                <div class="form-valid">
                    <span class="valid-icon"></span><span class="valid-msg"></span>
                </div>
            </div>
            <!-- 多选框验证 END -->
        </div>
    </div>
</template>

<script>
export default {
  name: 'formValid',
  data () {
    return {
      label: 'label文字',
      placeholder: 'placeholder文字',
      message: '这里是验证的提示信息'
    }
  }
}
</script>

<style lang="less" scoped>
    .form-type {
        > div {
            display: inline-block;
            font-size: 18px;
        }
        > .form-elem {
            > input, textarea {
                border: 1px solid black;
                border-radius: 3px;
            }
            > input, textarea, label {
                height: 30px;
                font-size: 18px;
                margin: 10px;
            }
        }
        > .form-valid {

        }
    }
</style>
