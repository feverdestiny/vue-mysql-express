<template>
  <div class="hello">
   <div id="wrapper">
        <!--左侧导航开始-->
        <nav class="navbar-default navbar-static-side" role="navigation">
            <div class="nav-close"><i class="fa fa-times-circle"></i>
            </div>
            <div class="sidebar-collapse">
                <ul class="nav" id="side-menu">
                    <li class="nav-header">
                        <div class="dropdown profile-element">
                            <span><img alt="image" class="img-circle" src="../assets/img/profile_small.jpg" /></span>
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <span class="clear">
                               <span class="block m-t-xs"><strong class="font-bold">Admin</strong></span>
                                <span class="text-muted text-xs block">管理员<b class="caret"></b></span>
                                </span>
                            </a>
                            <ul class="dropdown-menu animated fadeInRight m-t-xs">
                                <li><a class="J_menuItem" href="form_avatar.html">修改头像</a>
                                </li>
                                <li><a class="J_menuItem" href="profile.html">个人资料</a>
                                </li>
                        
                                <li class="divider"></li>
                                <li>
                         <router-link  to="/login">安全退出</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="logo-element">隧道
                        </div>
                    </li>
                    <li>
                         <router-link class="nav-label" to="/home"><i class="fa fa-home"></i>主页</router-link>
                  
                        <ul class="nav nav-second-level">
                  
                        </ul>

                    </li>
                
                    <li>
                        <a href="#">
                            <i class="fa fa-university"></i>
                             <span class="nav-label">部门管理 </span>
                             <span class="fa arrow"></span>
                             <!--<span class="label label-warning pull-right">16</span>-->
                             </a>

                        <ul class="nav nav-second-level">
                            <li>
                                <router-link class="J_menuItem" to="/User">班组管理</router-link>
                                <!--<a class="J_menuItem" v-link="{ path: '/about'}">班组管理</a>-->
                            </li>
                            <li>
                                <a class="J_menuItem" href="#">部门查询</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">
                            <i class="fa fa-user"></i>
                             <span class="nav-label">用户管理 </span>
                             <!--<span class="label label-warning pull-right">16</span>-->
                             </a>
                        <ul class="nav nav-second-level">
                            <li><a class="J_menuItem" href="#">用户新增</a>
                            </li>
                            <li><a class="J_menuItem" href="#">权限控制</a>
                            </li>
                           
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-address-card"></i> <span class="nav-label">施工人员管理</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a class="J_menuItem" href="form_basic.html">施工人员的新增</a>
                            </li>
                            <li><a class="J_menuItem" href="form_validate.html">施工人员统计</a>
                            </li>
                         
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-desktop"></i> <span class="nav-label">考勤管理</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a class="J_menuItem" href="contacts.html">考勤记录</a>
                            </li>x`
                            <li><a class="J_menuItem" href="profile.html">考勤统计</a>
                            </li>
                            
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-cubes"></i> <span class="nav-label">设备管理</span></a>
                       
                         
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-video-camera"></i> <span class="nav-label">视频监控系统</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a class="J_menuItem" href="table_basic.html">实时监控</a>
                            </li>
                            <li><a class="J_menuItem" href="table_data_tables.html">历史视频</a>
                            </li>
                            <li><a class="J_menuItem" href="table_jqgrid.html">远程视频终端服务</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-warning"></i> <span class="nav-label">报警系统</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a class="J_menuItem" href="basic_gallery.html">自动报警</a>
                            </li>
                            <li><a class="J_menuItem" href="carousel.html">报警配置</a>
                            </li>
                            <li><a class="J_menuItem" href="layerphotos.html">报警记录</a>
                            </li>
                        </ul>
                    </li>
                  
                    <li>
                        <a href="#"><i class="fa fa-street-view"></i> <span class="nav-label">人员定位系统 </span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a class="J_menuItem" href="basic_gallery.html">实时跟踪</a>
                            </li>
                            <li><a class="J_menuItem" href="carousel.html">选择跟踪</a>
                            </li>
                            <li><a class="J_menuItem" href="layerphotos.html">位置跟踪</a>
                            </li>
                             <li><a class="J_menuItem" href="layerphotos.html">历史轨迹查询</a>
                            </li>
                        </ul>
                    </li>
                       <li>
                        <a href="#"><i class="fa fa-line-chart"></i> <span class="nav-label">统计分析 </span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a class="J_menuItem" href="basic_gallery.html">施工人员查询</a>
                            </li>
                            <li><a class="J_menuItem" href="carousel.html">施工人数统计</a>
                            </li>
                            <li><a class="J_menuItem" href="layerphotos.html">区域人数统计</a>
                            </li>
                        </ul>
                    </li>
                         <li>
                        <a href="#"><i class="fa fa-pencil-square-o"></i> <span class="nav-label">信息发布 </span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a class="J_menuItem" href="basic_gallery.html">信息板配置</a>
                            </li>
                            <li><a class="J_menuItem" href="carousel.html">同步监测数据</a>
                            </li>
                            <li><a class="J_menuItem" href="layerphotos.html">信息发布记录</a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </nav>
        <!--左侧导航结束-->
        <!--右侧部分开始-->
        <div id="page-wrapper" class="gray-bg dashbard-1">
            <div class="row border-bottom">
                <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
                    <div class="navbar-header"><a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
                        <form role="search" class="navbar-form-custom" method="post" action="search_results.html">
                            <div class="form-group">
                                <input type="text" placeholder="请输入您需要查找的内容 …" class="form-control" name="top-search" id="top-search">
                            </div>
                        </form>
                    </div>
                    <ul class="nav navbar-top-links navbar-right">
                      
                        <li class="hidden-xs">
                            <a href="index_v1.html" class="J_menuItem" data-index="0"><i class="fa fa-cart-arrow-down"></i> 购买</a>
                        </li>
                        <li class="dropdown hidden-xs">
                            <a class="right-sidebar-toggle" aria-expanded="false">
                                <i class="fa fa-tasks"></i> 主题
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="row content-tabs">
                <button class="roll-nav roll-left J_tabLeft"><i class="fa fa-backward"></i>
                </button>
                <nav class="page-tabs J_menuTabs">
                    <div class="page-tabs-content">
                        <a href="javascript:;" class="active J_menuTab" data-id="index_v1.html">首页</a>
                    </div>
                </nav>
                <button class="roll-nav roll-right J_tabRight"><i class="fa fa-forward"></i>
                </button>
                <div class="btn-group roll-nav roll-right">
                    <button class="dropdown J_tabClose" data-toggle="dropdown">关闭操作<span class="caret"></span>

                    </button>
                    <ul role="menu" class="dropdown-menu dropdown-menu-right">
                        <li class="J_tabShowActive"><a>定位当前选项卡</a>
                        </li>
                        <li class="divider"></li>
                        <li class="J_tabCloseAll"><a>关闭全部选项卡</a>
                        </li>
                        <li class="J_tabCloseOther"><a>关闭其他选项卡</a>
                        </li>
                    </ul>
                </div>
                <a href="login.html" class="roll-nav roll-right J_tabExit"><i class="fa fa fa-sign-out"></i> 退出</a>
            </div>
            <div class="row J_mainContent" id="content-main">
                <!--<LoginInfo></LoginInfo>-->
                <router-view></router-view>
                <!--<iframe class="J_iframe" name="iframe0" width="100%" height="100%" src="/Login" frameborder="0"  seamless></iframe>-->
            </div>
            <div class="footer">
                <div class="pull-right">&copy; 2014-2015 <a href="http://www.zi-han.net/" target="_blank">zihan's blog</a>
                </div>
            </div>
        </div>
        <!--右侧部分结束-->
        <!--右侧边栏开始-->
        <div id="right-sidebar">
            <div class="sidebar-container">

                <ul class="nav nav-tabs navs-3">

                    <li class="active">
                        <a data-toggle="tab" href="#tab-1">
                            <i class="fa fa-gear"></i> 主题
                        </a>
                    </li>
                   
                </ul>

                <div class="tab-content">
                    <div id="tab-1" class="tab-pane active">
                        <div class="sidebar-title">
                            <h3> <i class="fa fa-comments-o"></i> 主题设置</h3>
                            <small><i class="fa fa-tim"></i> 你可以从这里选择和预览主题的布局和样式，这些设置会被保存在本地，下次打开的时候会直接应用这些设置。</small>
                        </div>
                        <div class="skin-setttings">
                            <div class="title">主题设置</div>
                            <div class="setings-item">
                                <span>收起左侧菜单</span>
                                <div class="switch">
                                    <div class="onoffswitch">
                                        <input type="checkbox" name="collapsemenu" class="onoffswitch-checkbox" id="collapsemenu">
                                        <label class="onoffswitch-label" for="collapsemenu">
                                            <span class="onoffswitch-inner"></span>
                                            <span class="onoffswitch-switch"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="setings-item">
                                <span>固定顶部</span>

                                <div class="switch">
                                    <div class="onoffswitch">
                                        <input type="checkbox" name="fixednavbar" class="onoffswitch-checkbox" id="fixednavbar">
                                        <label class="onoffswitch-label" for="fixednavbar">
                                            <span class="onoffswitch-inner"></span>
                                            <span class="onoffswitch-switch"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="setings-item">
                                <span>
                        固定宽度
                    </span>

                                <div class="switch">
                                    <div class="onoffswitch">
                                        <input type="checkbox" name="boxedlayout" class="onoffswitch-checkbox" id="boxedlayout">
                                        <label class="onoffswitch-label" for="boxedlayout">
                                            <span class="onoffswitch-inner"></span>
                                            <span class="onoffswitch-switch"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="title">皮肤选择</div>
                            <div class="setings-item default-skin nb">
                                <span class="skin-name ">
                         <a href="#" class="s-skin-0">
                             默认皮肤
                         </a>
                    </span>
                            </div>
                            <div class="setings-item blue-skin nb">
                                <span class="skin-name ">
                        <a href="#" class="s-skin-1">
                            蓝色主题
                        </a>
                    </span>
                            </div>
                            <div class="setings-item yellow-skin nb">
                                <span class="skin-name ">
                        <a href="#" class="s-skin-3">
                            黄色/紫色主题
                        </a>
                    </span>
                            </div>
                        </div>
                    </div>
               
                </div>

            </div>
        </div>
        <!--右侧边栏结束-->
        <!--mini聊天窗口开始-->
        <div class="small-chat-box fadeInRight animated">

            <div class="heading" draggable="true">
                <small class="chat-date pull-right">
                    2015.9.1
                </small> 与 Beau-zihan 聊天中
            </div>

            <div class="content">

                <div class="left">
                    <div class="author-name">
                        Beau-zihan <small class="chat-date">
                        10:02
                    </small>
                    </div>
                    <div class="chat-message active">
                        你好
                    </div>

                </div>
                <div class="right">
                    <div class="author-name">
                        游客
                        <small class="chat-date">
                            11:24
                        </small>
                    </div>
                    <div class="chat-message">
                        你好，请问H+有帮助文档吗？
                    </div>
                </div>
                <div class="left">
                    <div class="author-name">
                        Beau-zihan
                        <small class="chat-date">
                            08:45
                        </small>
                    </div>
                    <div class="chat-message active">
                        有，购买的H+源码包中有帮助文档，位于docs文件夹下
                    </div>
                </div>
                <div class="right">
                    <div class="author-name">
                        游客
                        <small class="chat-date">
                            11:24
                        </small>
                    </div>
                    <div class="chat-message">
                        那除了帮助文档还提供什么样的服务？
                    </div>
                </div>
                <div class="left">
                    <div class="author-name">
                        Beau-zihan
                        <small class="chat-date">
                            08:45
                        </small>
                    </div>
                    <div class="chat-message active">
                        1.所有源码(未压缩、带注释版本)；
                        <br> 2.说明文档；
                        <br> 3.终身免费升级服务；
                        <br> 4.必要的技术支持；
                        <br> 5.付费二次开发服务；
                        <br> 6.授权许可；
                        <br> ……
                        <br>
                    </div>
                </div>


            </div>
            <div class="form-chat">
                <div class="input-group input-group-sm">
                    <input type="text" class="form-control"> <span class="input-group-btn"> <button
                        class="btn btn-primary" type="button">发送
                </button> </span>
                </div>
            </div>

        </div>
        <div id="small-chat">
            <span class="badge badge-warning pull-right">5</span>
            <a class="open-small-chat">
                <i class="fa fa-comments"></i>

            </a>
        </div>
    </div>
  </div>
</template>


<script>
    import axios from 'axios'

    import metisMenu from '../assets/js/plugins/metisMenu/jquery.metisMenu.js'
    import slimscroll from '../assets/js/plugins/slimscroll/jquery.slimscroll.min.js'
    import layer from '../assets/js/plugins/layer/layer.js'
    import hplus from '../assets/js/hplus.min.js'
    import contabs from '../assets/js/contabs.min.js'
    import pace from '../assets/js/plugins/pace/pace.min.js'


    import LoginInfo from '../components/Login.vue'
    export default {
        name: 'hello',
        data() {
            return {
                userName: '',
                age: ''
            }
        },
        methods: {
            addUser() {
                var name = this.userName;
                var age = this.age;
                // this.$http.post('/api/user/addUser', {
                //     username: name,
                //     age: age
                // }, {}).then((response) => {
                //     console.log(response);
                // })
                axios.post('/api/user/addUser', {
                        username: name,
                        age: age
                    })
                    .then(function(response) {
                        console.log(response);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        },
        components: {
            LoginInfo,
        }
    }
</script>

<style scoped>
    .nav-header {
        padding: 25px 25px;
    }
</style>