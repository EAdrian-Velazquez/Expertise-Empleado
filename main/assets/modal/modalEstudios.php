<div class="modal fade" id="modalEstudios" tabindex="-1" role="dialog" aria-labelledby="modalEstudios"aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalEstudios"></h5>
            </div>
        <form id="formEstudios" class="formuEstudios">    
            <div class="modal-body" scrollY="true">
    <!-------------------------------------------------- 1 LINEA -------------------------------------------------------------------------->
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="form-group">
                                <input type="text" class="form-control" id="opcE" style="display:none ">
                                <input type="text" class="form-control" id="idE" style="display:none ">
                                <input type="text" class="form-control" id="num_empE" style="display:none ">
                                <label for="" class="col-form-label">Nivel Académico</label>
                                <select class="form-select form-select" id="niv_acadE">
                                    <option value="0" selected="selected">Selecciona tu Nivel Académico</option>
                                        <?php while($rowM = pg_fetch_assoc($resultadoM)) {  ?>
                                    <option value="<?php echo $rowM['idnivel'];?>" selected="valor"> 
                                            <?php echo $rowM['nom_nivacad'];?>
                                    </option>
                                        <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="" class="col-form-label">Nombre de Carrera</label>
                                <select class="form-select form-select" name="nombrecarrera" id="nom_carrE">
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-1">
                             <div class="form-group">
                                <label for="" class="col-form-label">Titulo</label>
                                <select class="form-select form-select" id="tituloE">
                                    <option value="0" selected="selected">Selecciona</option>
                                        <?php while($rowSNT = pg_fetch_assoc($resultadoSNT)) {  ?>
                                    <option value="<?php echo $rowSNT['idsn'];?>" selected="valor"> 
                                            <?php echo $rowSNT['si_no'];?>
                                    </option>
                                        <?php } ?>
                                </select>                            
                           
                                <!-- <label for="" class="col-form-label">Titulo</label>
                                <input type="fecha" class="form-control" id="tituloE"> -->
                            </div>
                        </div>
                        <div class="col-lg-1">
                            <div class="form-group">
                                <label for="" class="col-form-label">Comprob</label>
                                <select class="form-select form-select" id="comproE">
                                    <option value="0" selected="selected">Selecciona</option>
                                        <?php while($rowSNC = pg_fetch_assoc($resultadoSNC)) {  ?>
                                    <option value="<?php echo $rowSNC['idsn'];?>" selected="valor"> 
                                            <?php echo $rowSNC['si_no'];?>
                                    </option>
                                        <?php } ?>
                                </select>                            
                                <!-- <label for="" class="col-form-label">Comprob.</label>
                                <input type="text" class="form-control" id="comproE"></textarea> -->
                            </div>
                        </div>
                        <div class="col-lg-1">
                            <div class="form-group">
                                <label for="" class="col-form-label">Ced Prof</label>
                                <select class="form-select form-select" id="cedulaE">
                                    <option value="0" selected="selected">Selecciona</option>
                                        <?php while($rowSNCP = pg_fetch_assoc($resultadoSNCP)) {  ?>
                                    <option value="<?php echo $rowSNCP['idsn'];?>" selected="valor"> 
                                            <?php echo $rowSNCP['si_no'];?>
                                    </option>
                                        <?php } ?>
                                </select>                            
                                <!-- <label for="" class="col-form-label">Ced. Profesional</label>
                                <input type="text" class="form-control" id="cedulaE"> -->
                            </div>
                        </div>
                    </div>
    <!-------------------------------------------------- 6 LINEA -------------------------------------------------------------------------->
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="" class="col-form-label">Nombre de Intitución</label>
                                <input type="text" class="form-control" id="nom_instituE">
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="form-group">
                                <label for="" class="col-form-label">Fecha Inicio</label>
                                <input type="date" class="form-control" id="fech_inicE">
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="form-group">
                                <label for="startDate" class="col-form-label">Fecha Conclusión</label>
                                <input type="date" class="form-control" id="fech_concE">
                            </div>
                        </div>
                    </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" id ="cierreModalEstudios">Cancelar</button>
                <button type="submit" id="btnGuardarEstudios" class="btn btn-success">Guardar</button>
            </div>
        </div>
        </form>    
        </div>
    </div>
</div>