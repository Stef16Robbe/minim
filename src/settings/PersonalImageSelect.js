import React, { Component } from "react";
import Ikigai from "../Ikigai";


export class PersonalImageSelect extends Component {
    constructor() {
        super();
        this.state = {
          modalVisible: false,
          refresh_enabled: true,
          loadingImage: false,
          filter: "saturate(0%)",
          tint: 1,
    
          background_mode: localStorage.getItem("background_mode"),
          dots: localStorage.getItem("dots"),
          tint_value: parseFloat(localStorage.getItem("tint_value")),
          image_index: localStorage.getItem("image_index"),
          image: localStorage.getItem("image"),
          image2: localStorage.getItem("image2"),
          font: localStorage.getItem("font"),
          widget: localStorage.getItem("widget"),
          clock_border: localStorage.getItem("clock_border"),
          weather_format: localStorage.getItem("weather_format"),
          clock_seperator: localStorage.getItem("clock_seperator"),
          clock_format: localStorage.getItem("clock_format"),
          background_cycle: localStorage.getItem("background_cycle"),
          temprature_unit: localStorage.getItem("temprature_unit"),
          widget_x: localStorage.getItem("widget_x"),
          widget_y: localStorage.getItem("widget_y"),
          widget_font_size: localStorage.getItem("widget_font_size"),
          message: localStorage.getItem("message"),
          timer_pre_text: localStorage.getItem("timer_pre_text"),
          timer_post_text: localStorage.getItem("timer_post_text"),
          timer_time: localStorage.getItem("timer_time"),
          timer_format: localStorage.getItem("timer_format"),
          image_foreground: localStorage.getItem("image_foreground"),
          image_tags: localStorage.getItem("image_tags"),
          color_index: localStorage.getItem("color_index"),
          location: localStorage.getItem("location"),
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.setPersonalImage = this.setPersonalImage.bind(this);
        this.getBase64 = this.getBase64.bind(this);
    }

    setStore = (state_name, value) => {
        this.setState({ [state_name]: value });
        localStorage.setItem(state_name, value);
    };
    
    getStore = (state_name) => {
        return this.state[state_name];
    };

    getBase64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
        //   console.log(reader.result);
          return reader.result;
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
    }

    toDataURL = url => fetch(url)
        .then(response => response.blob())
        .then(blob => new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onloadend = () => resolve(reader.result)
            reader.onerror = reject
            reader.readAsDataURL(blob)
    }))

    setPersonalImage(b64img) {
        // if (this.state.image_index === "0") {
        localStorage.setItem("image", b64img);
        this.setState({ image: b64img });
        // } else {
        localStorage.setItem("image2", b64img);
        this.setState({ image2: b64img });
        // }
      };

    changeHandler(event) {
        var img = event.target.files[0];
        var base64img = this.toDataURL(img)
            .then(bImg => {
                return bImg;
            })
        
        base64img.then(img => {
            this.setPersonalImage(img);
        })

        var HelloElement = React.createElement(Ikigai, {});
        
        var HelloRendered = React.render(HelloElement);
        
        HelloRendered.setPersonalImage();

        console.log(localStorage.getItem("image"));
        console.log(localStorage.getItem("image2"));
    }
    
    render() {
        return (
            <div>
                <input type="file" id="ownImage" name="ownImage" onChange={this.changeHandler}/>
            </div>
        );
    }
}

export default PersonalImageSelect;
