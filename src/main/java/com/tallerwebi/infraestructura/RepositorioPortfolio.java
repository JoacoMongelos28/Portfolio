package com.tallerwebi.infraestructura;

import com.tallerwebi.dominio.IRepositorioPortfolio;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RepositorioPortfolio implements IRepositorioPortfolio {

    private SessionFactory sessionFactory;

    @Autowired
    public RepositorioPortfolio(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
}
