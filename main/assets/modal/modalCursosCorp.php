<div class="modal fade" id="CursoCORP" tabindex="-1" role="dialog" aria-labelledby="LabelCursoCORP"aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="LabelCursoCORP"></h5>
            </div>
            <form id="formCursosCorp">    
                <div class="modal-body" scrollY="true">
        <!-------------------------------------------------- 1 LINEA -------------------------------------------------------------------------->
                    <div class="row">
                        <div class="col-lg-2">
                            <div class="form-group">
                                <input type="text" class="form-control" id="opcCorpC" style="display:none ">
                                <input type="text" class="form-control" id="idCorpC" style="display:none ">
                                <input type="text" class="form-control" id="num_empCorpC" style="display:none ">
                                <label for="" class="col-form-label">Titulo</label>
                                <input type="text" class="form-control" id="titulo" disabled="false">
                                <!-- <input type="date" class="form-control" id="fecha"> -->
                            </div>
                        </div> 
                        <div class="col-lg-3 col-center">
                            <div class="form-group">
                                <label for="timeClock" class="col-form-label">Periodos</label>
                                <!-- <input type="text" id="time" class="form-control" placeholder="Time"> -->
                                <label for="timeClock" class="col-form-label">Inicio:</label>
                                <input type="date" name="timeClock" class="form-control" id="timeClockhrs">
                                <label for="timeClock" class="col-form-label">Fin:</label>
                                <!-- <input type="text" id="time" class="form-control" placeholder="Time"> -->
                                <input type="date" name="timeClock" class="form-control" id="timeClockMin">
                            </div>
                        </div>
                        <div class="col-lg-3 col-center">
                            <div class="form-group">
                                <label for="timeClock" class="col-form-label">Duración Hrs</label>

                                <!-- <input type="text" id="time" class="form-control" placeholder="Time"> -->
                                <input type="text" name="timeClock" class="form-control" id="timeDuracion" disabled="false">
                            </div>
                        </div>                        
                        <div class="col-lg-4 col-center">
                            <div class="form-group">
                                <label for="" class="col-form-label">Imparte</label>
                                <input type="text" class="form-control" id="imparte" disabled="false">
                            </div>
                        </div>
                    </div>
        <!-------------------------------------------------- 2 LINEA -------------------------------------------------------------------------->
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="form-group">
                                <label for="" class="col-form-label">Escuela</label>
                                <input class="form-control" id="escuela" disabled="false">
                            </div>
                        </div> 
                        <div class="col-lg-2">
                             <div class="form-group">
                                <label for="" class="col-form-label">Constancia</label>
                                <select class="form-select form-select" id="constancia">
                                    <option value="0" selected="selected">Selecciona</option>
                                        <?php while($rowSNCCC = pg_fetch_assoc($resultadoSNCCC)) {  ?>
                                    <option value="<?php echo $rowSNCCC['idsn'];?>" selected="valor"> 
                                            <?php echo $rowSNCCC['si_no'];?>
                                    </option>
                                        <?php } ?>
                                </select>                            
                            </div>
                        </div>
                        <!-- <div class="col-lg-2">
                            <div class="form-group">
                                <label for="quantity" class="col-form-label">Constancia</label>
                                <input type="text" class="form-control" id="constancia" >
                            </div>
                        </div> -->
                        <div class="col-lg-2">
                             <div class="form-group">
                                <label for="" class="col-form-label">Estatus</label>
                                <select class="form-select form-select" id="estatus">
                                    <option value="0" selected="selected">Selecciona</option>
                                        <?php while($rowSTATUS = pg_fetch_assoc($resultadoSTATUS)) {  ?>
                                    <option value="<?php echo $rowSTATUS['idstatus'];?>" selected="valor"> 
                                            <?php echo $rowSTATUS['estatus'];?>
                                    </option>
                                        <?php } ?>
                                </select>                            
                            </div>
                        </div>
                        <!-- <div class="col-lg-4 col-center">
                            <div class="form-group">
                                <label for="" class="col-form-label">Estatus</label>
                                <input type="text" class="form-control" id="estatus">
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" id ="cierreModalCursoCorpo">Cancelar</button>
                    <button type="submit" id="btnGuardarCursoCorp" class="btn btn-success">Guardar</button>
                </div>
            </form>    
        </div>
    </div>
</div>