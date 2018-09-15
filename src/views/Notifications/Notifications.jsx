import React, { Component } from "react";
import { Grid, Row, Col, Alert } from "react-bootstrap";
import "./Notification.css"
import Button from "../../components/CustomButton/CustomButton.jsx";

class Notifications extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <div className="card">
            <div className="header">
              <h4 className="title">Mensajes</h4>
            
<div class="container bootstrap snippet">
    <div class="tile tile-alt" id="messages-main">
        <div class="ms-menu">
            <div class="ms-user clearfix">
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="img-avatar pull-left"/>
                <div>Signed in as  m-hollaway@gmail.com</div>
            </div>
            
            <div class="p-15">
                <div class="dropdown">
                    <a class="btn btn-primary btn-block" href="" data-toggle="dropdown">Messages <i class="caret m-l-5"></i></a>
    
                    <ul class="dropdown-menu dm-icon w-100">
                        <li><a href=""><i class="fa fa-envelope"></i> Messages</a></li>
                        <li><a href=""><i class="fa fa-users"></i> Contacts</a></li>
                        <li><a href=""><i class="fa fa-format-list-bulleted"> </i>Todo Lists</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="list-group lg-alt">
                <a class="list-group-item media" href="">
                    <div class="pull-left">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" class="img-avatar"/>
                    </div>
                    <div class="media-body">
                        <small class="list-group-item-heading">Davil Parnell</small>
                        <small class="list-group-item-text c-gray">Fierent fastidii recteque ad pro</small>
                    </div>
                </a>
                
                <a class="list-group-item media" href="">
                    <div class="pull-left">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" class="img-avatar"/>
                    </div>
                    <div class="media-body">
                        <div class="list-group-item-heading">Ann Watkinson</div>
                        <small class="list-group-item-text c-gray">Cum sociis natoque penatibus </small>
                    </div>
                </a>
                
                <a class="list-group-item media" href="">
                    <div class="pull-left">
                        <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" class="img-avatar"/>
                    </div>
                    <div class="media-body">
                        <div class="list-group-item-heading">Marse Walter</div>
                        <small class="list-group-item-text c-gray">Suspendisse sapien ligula</small>
                    </div>
                </a>
                
                <a class="list-group-item media" href="">
                    <div class="lv-avatar pull-left">
                        <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" class="img-avatar"/>
                    </div>
                    <div class="media-body">
                        <div class="list-group-item-heading">Jeremy Robbins</div>
                        <small class="list-group-item-text c-gray">Phasellus porttitor tellus nec</small>
                    </div>
                </a>
                
                <a class="list-group-item media" href="">
                    <div class="lv-avatar pull-left">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" class="img-avatar"/>
                    </div>
                    <div class="media-body">
                        <div class="list-group-item-heading">Reginald Horace</div>
                        <small class="list-group-item-text c-gray">Quisque consequat arcu eget</small>
                    </div>
                </a>
                
                <a class="list-group-item media" href="">
                    <div class="pull-left">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" class="img-avatar"/>
                    </div>
                    <div class="media-body">
                        <div class="list-group-item-heading">Shark Henry</div>
                        <small class="list-group-item-text c-gray">Nam lobortis odio et leo maximu</small>
                    </div>
                </a>
                
                <a class="list-group-item media" href="">
                    <div class="pull-left">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="img-avatar"/>
                    </div>
                    <div class="media-body">
                        <div class="list-group-item-heading">Paul Van Dack</div>
                        <small class="list-group-item-text c-gray">Nam posuere purus sed velit auctor sodales</small>
                    </div>
                </a>
                
                <a class="list-group-item media" href="">
                    <div class="lv-avatar pull-left">
                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" class="img-avatar"/>
                    </div>
                    <div class="media-body">
                        <div class="list-group-item-heading">James Anderson</div>
                        <small class="list-group-item-text c-gray">Vivamus imperdiet sagittis quam</small>
                    </div>
                </a>
                
                <a class="list-group-item media" href="">
                    <div class="lv-avatar pull-left">
                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" class="img-avatar"/>
                    </div>
                    <div class="media-body">
                        <div class="list-group-item-heading">Kane Williams</div>
                        <small class="list-group-item-text c-gray">Suspendisse justo nulla luctus nec</small>
                    </div>
                </a>
            </div>
    
            
        </div>
        
        <div class="ms-body">
            <div class="action-header clearfix">
                <div class="visible-xs" id="ms-menu-trigger">
                    <i class="fa fa-bars"></i>
                </div>
                
                <div class="pull-left hidden-xs">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" class="img-avatar m-r-10"/>
                    <div class="lv-avatar pull-left">
                        
                    </div>
                    <span>David Parbell</span>
                </div>
                 
                <ul class="ah-actions actions">
                    <li>
                        <a href="">
                            <i class="fa fa-trash"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa fa-check"></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa fa-clock-o"></i>
                        </a>
                    </li>
                    <li class="dropdown">
                        <a href="" data-toggle="dropdown" aria-expanded="true">
                            <i class="fa fa-sort"></i>
                        </a>
            
                        <ul class="dropdown-menu dropdown-menu-right">
                            <li>
                                <a href="">Latest</a>
                            </li>
                            <li>
                                <a href="">Oldest</a>
                            </li>
                        </ul>
                    </li>                             
                    <li class="dropdown">
                        <a href="" data-toggle="dropdown" aria-expanded="true">
                            <i class="fa fa-bars"></i>
                        </a>
            
                        <ul class="dropdown-menu dropdown-menu-right">
                            <li>
                                <a href="">Refresh</a>
                            </li>
                            <li>
                                <a href="">Message Settings</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
    
            <div class="message-feed media">
                <div class="pull-left">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="img-avatar"/>
                </div>
                <div class="media-body">
                    <div class="mf-content">
                        Quisque consequat arcu eget odio cursus, ut tempor arcu vestibulum. Etiam ex arcu, porta a urna non, lacinia pellentesque orci. Proin semper sagittis erat, eget condimentum sapien viverra et. Mauris volutpat magna nibh, et condimentum est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar lobortis.
                    </div>
                    <small class="mf-date"><i class="fa fa-clock-o"></i> 20/02/2015 at 09:00</small>
                </div>
            </div>
            
            <div class="message-feed right">
                <div class="pull-right">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" class="img-avatar"/>
                </div>
                <div class="media-body">
                    <div class="mf-content">
                        Mauris volutpat magna nibh, et condimentum est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar lobortis.
                    </div>
                    <small class="mf-date"><i class="fa fa-clock-o"></i> 20/02/2015 at 09:30</small>
                </div>
            </div>
            
            <div class="message-feed media">
                <div class="pull-left">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="img-avatar"/>
                </div>
                <div class="media-body">
                    <div class="mf-content">
                        Etiam ex arcumentum
                    </div>
                    <small class="mf-date"><i class="fa fa-clock-o"></i> 20/02/2015 at 09:33</small>
                </div>
            </div>
            
            <div class="message-feed right">
                <div class="pull-right">
                    <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" class="img-avatar"/>
                </div>
                <div class="media-body">
                    <div class="mf-content">
                        Etiam nec facilisis lacus. Nulla imperdiet augue ullamcorper dui ullamcorper, eu laoreet sem consectetur. Aenean et ligula risus. Praesent sed posuere sem. Cum sociis natoque penatibus et magnis dis parturient montes,
                    </div>
                    <small class="mf-date"><i class="fa fa-clock-o"></i> 20/02/2015 at 10:10</small>
                </div>
            </div>
            
            <div class="message-feed media">
                <div class="pull-left">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="img-avatar"/>
                </div>
                <div class="media-body">
                    <div class="mf-content">
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam ac tortor ut elit sodales varius. Mauris id ipsum id mauris malesuada tincidunt. Vestibulum elit massa, pulvinar at sapien sed, luctus vestibulum eros. Etiam finibus tristique ante, vitae rhoncus sapien volutpat eget
                    </div>
                    <small class="mf-date"><i class="fa fa-clock-o"></i> 20/02/2015 at 10:24</small>
                </div>
            </div>
            
            <div class="msb-reply">
                <textarea placeholder="What's on your mind..."></textarea>
                <button><i class="fa fa-paper-plane-o"></i></button>
            </div>
        </div>
    </div>
</div>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Notifications;
