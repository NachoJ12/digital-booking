package com.grupo9.digitalbooking.controller;

import com.grupo9.digitalbooking.model.City;
import com.grupo9.digitalbooking.services.CityService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Api(tags="Cities")
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/cities")
public class CityController {

    @Autowired
    private CityService cityService;

    @GetMapping
    public ResponseEntity<List<City>> listarCiudades() {
        return ResponseEntity.ok(cityService.getAllCities());
    }

    @GetMapping("/{id}")
    public ResponseEntity<City> buscarCiudad(@PathVariable Integer id) {
        Optional<City> ciudadBuscada = cityService.getCityById(id);
        if (ciudadBuscada.isPresent()) {
            return ResponseEntity.ok(ciudadBuscada.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/create")
    public ResponseEntity<City> crearCiudad(@RequestBody City city) {
        return ResponseEntity.ok(cityService.saveCity(city));
    }

    @PutMapping("/update")
    public ResponseEntity<?> editarCiudad(@RequestBody City city) throws Exception {
        Optional<City> ciudadBuscada = cityService.getCityById(city.getId());
        if (ciudadBuscada.isPresent()) {
            return ResponseEntity.ok(cityService.updateCity(city));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("La ciudad con ID: " + city.getId() + " no se encuentra ");
        }

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> eliminarCiudad(@PathVariable Integer id) {
        if (cityService.getCityById(id).isPresent()) {
            cityService.deleteCityById(id);
            return ResponseEntity.ok("Se eliminó con éxito la ciudad con ID: " + id);
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontró la ciudad coon ID: " + id);
    }
}