package com.tallerwebi.presentacion;

import com.tallerwebi.dominio.IServicioPortfolio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ControladorPortfolio {

    private IServicioPortfolio servicioPortfolio;

    @Autowired
    public ControladorPortfolio(IServicioPortfolio servicioPortfolio) {
        this.servicioPortfolio = servicioPortfolio;
    }

    @RequestMapping("JoaquinMongelos")
    public ModelAndView miPortfolio() {
        return new ModelAndView("miPortfolio");
    }

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public ModelAndView inicio() {
        return new ModelAndView("redirect:/JoaquinMongelos");
    }
}
