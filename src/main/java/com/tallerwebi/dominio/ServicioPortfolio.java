package com.tallerwebi.dominio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServicioPortfolio implements IServicioPortfolio {

    private IRepositorioPortfolio repositorioPortfolio;

    @Autowired
    public ServicioPortfolio (IRepositorioPortfolio repositorioPortfolio) {
        this.repositorioPortfolio = repositorioPortfolio;
    }

}
