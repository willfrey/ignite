Search.setIndex({docnames:["about","concepts","contrib/engines","contrib/handlers","contrib/metrics","engine","examples","exceptions","faq","governance","handlers","index","metrics","quickstart","utils"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["about.rst","concepts.rst","contrib/engines.rst","contrib/handlers.rst","contrib/metrics.rst","engine.rst","examples.rst","exceptions.rst","faq.rst","governance.rst","handlers.rst","index.rst","metrics.rst","quickstart.rst","utils.rst"],objects:{"":{ignite:[11,0,0,"-"]},"ignite.contrib":{metrics:[4,0,0,"-"]},"ignite.contrib.engines":{common:[2,0,0,"-"],tbptt:[2,0,0,"-"]},"ignite.contrib.engines.common":{add_early_stopping_by_val_score:[2,1,1,""],save_best_model_by_val_score:[2,1,1,""],setup_common_distrib_training_handlers:[2,1,1,""],setup_common_training_handlers:[2,1,1,""],setup_mlflow_logging:[2,1,1,""],setup_neptune_logging:[2,1,1,""],setup_plx_logging:[2,1,1,""],setup_tb_logging:[2,1,1,""],setup_trains_logging:[2,1,1,""],setup_visdom_logging:[2,1,1,""],setup_wandb_logging:[2,1,1,""]},"ignite.contrib.engines.tbptt":{Tbptt_Events:[2,2,1,""],create_supervised_tbptt_trainer:[2,1,1,""]},"ignite.contrib.handlers":{custom_events:[3,0,0,"-"],lr_finder:[3,0,0,"-"],mlflow_logger:[3,0,0,"-"],neptune_logger:[3,0,0,"-"],param_scheduler:[3,0,0,"-"],polyaxon_logger:[3,0,0,"-"],tensorboard_logger:[3,0,0,"-"],time_profilers:[3,0,0,"-"],tqdm_logger:[3,0,0,"-"],trains_logger:[3,0,0,"-"],visdom_logger:[3,0,0,"-"],wandb_logger:[3,0,0,"-"]},"ignite.contrib.handlers.custom_events":{CustomPeriodicEvent:[3,2,1,""]},"ignite.contrib.handlers.lr_finder":{FastaiLRFinder:[3,2,1,""]},"ignite.contrib.handlers.lr_finder.FastaiLRFinder":{attach:[3,3,1,""],get_results:[3,3,1,""],lr_suggestion:[3,3,1,""],plot:[3,3,1,""]},"ignite.contrib.handlers.mlflow_logger":{MLflowLogger:[3,2,1,""],OptimizerParamsHandler:[3,2,1,""],OutputHandler:[3,2,1,""],global_step_from_engine:[3,1,1,""]},"ignite.contrib.handlers.mlflow_logger.MLflowLogger":{attach:[3,3,1,""],attach_opt_params_handler:[3,3,1,""],attach_output_handler:[3,3,1,""]},"ignite.contrib.handlers.neptune_logger":{GradsScalarHandler:[3,2,1,""],NeptuneLogger:[3,2,1,""],NeptuneSaver:[3,2,1,""],OptimizerParamsHandler:[3,2,1,""],OutputHandler:[3,2,1,""],WeightsScalarHandler:[3,2,1,""],global_step_from_engine:[3,1,1,""]},"ignite.contrib.handlers.neptune_logger.NeptuneLogger":{attach:[3,3,1,""],attach_opt_params_handler:[3,3,1,""],attach_output_handler:[3,3,1,""]},"ignite.contrib.handlers.param_scheduler":{ConcatScheduler:[3,2,1,""],CosineAnnealingScheduler:[3,2,1,""],CyclicalScheduler:[3,2,1,""],LRScheduler:[3,2,1,""],LinearCyclicalScheduler:[3,2,1,""],ParamGroupScheduler:[3,2,1,""],ParamScheduler:[3,2,1,""],PiecewiseLinear:[3,2,1,""],create_lr_scheduler_with_warmup:[3,1,1,""]},"ignite.contrib.handlers.param_scheduler.ConcatScheduler":{get_param:[3,3,1,""],load_state_dict:[3,3,1,""],simulate_values:[3,4,1,""],state_dict:[3,3,1,""]},"ignite.contrib.handlers.param_scheduler.CosineAnnealingScheduler":{get_param:[3,3,1,""]},"ignite.contrib.handlers.param_scheduler.LRScheduler":{get_param:[3,3,1,""],simulate_values:[3,4,1,""]},"ignite.contrib.handlers.param_scheduler.LinearCyclicalScheduler":{get_param:[3,3,1,""]},"ignite.contrib.handlers.param_scheduler.ParamGroupScheduler":{load_state_dict:[3,3,1,""],state_dict:[3,3,1,""]},"ignite.contrib.handlers.param_scheduler.ParamScheduler":{get_param:[3,3,1,""],load_state_dict:[3,3,1,""],plot_values:[3,4,1,""],simulate_values:[3,4,1,""],state_dict:[3,3,1,""]},"ignite.contrib.handlers.param_scheduler.PiecewiseLinear":{get_param:[3,3,1,""]},"ignite.contrib.handlers.polyaxon_logger":{OptimizerParamsHandler:[3,2,1,""],OutputHandler:[3,2,1,""],PolyaxonLogger:[3,2,1,""],global_step_from_engine:[3,1,1,""]},"ignite.contrib.handlers.polyaxon_logger.PolyaxonLogger":{attach:[3,3,1,""],attach_opt_params_handler:[3,3,1,""],attach_output_handler:[3,3,1,""]},"ignite.contrib.handlers.tensorboard_logger":{GradsHistHandler:[3,2,1,""],GradsScalarHandler:[3,2,1,""],OptimizerParamsHandler:[3,2,1,""],OutputHandler:[3,2,1,""],TensorboardLogger:[3,2,1,""],WeightsHistHandler:[3,2,1,""],WeightsScalarHandler:[3,2,1,""],global_step_from_engine:[3,1,1,""]},"ignite.contrib.handlers.tensorboard_logger.TensorboardLogger":{attach:[3,3,1,""],attach_opt_params_handler:[3,3,1,""],attach_output_handler:[3,3,1,""]},"ignite.contrib.handlers.time_profilers":{BasicTimeProfiler:[3,2,1,""]},"ignite.contrib.handlers.time_profilers.BasicTimeProfiler":{get_results:[3,3,1,""],print_results:[3,5,1,""],write_results:[3,3,1,""]},"ignite.contrib.handlers.tqdm_logger":{ProgressBar:[3,2,1,""]},"ignite.contrib.handlers.tqdm_logger.ProgressBar":{attach:[3,3,1,""],attach_opt_params_handler:[3,3,1,""],log_message:[3,3,1,""]},"ignite.contrib.handlers.trains_logger":{GradsHistHandler:[3,2,1,""],GradsScalarHandler:[3,2,1,""],OptimizerParamsHandler:[3,2,1,""],OutputHandler:[3,2,1,""],TrainsLogger:[3,2,1,""],TrainsSaver:[3,2,1,""],WeightsHistHandler:[3,2,1,""],WeightsScalarHandler:[3,2,1,""],global_step_from_engine:[3,1,1,""]},"ignite.contrib.handlers.trains_logger.TrainsLogger":{attach:[3,3,1,""],attach_opt_params_handler:[3,3,1,""],attach_output_handler:[3,3,1,""],bypass_mode:[3,4,1,""],set_bypass_mode:[3,4,1,""]},"ignite.contrib.handlers.trains_logger.TrainsSaver":{get_local_copy:[3,3,1,""]},"ignite.contrib.handlers.visdom_logger":{GradsScalarHandler:[3,2,1,""],OptimizerParamsHandler:[3,2,1,""],OutputHandler:[3,2,1,""],VisdomLogger:[3,2,1,""],WeightsScalarHandler:[3,2,1,""],global_step_from_engine:[3,1,1,""]},"ignite.contrib.handlers.visdom_logger.GradsScalarHandler":{add_scalar:[3,3,1,""]},"ignite.contrib.handlers.visdom_logger.OptimizerParamsHandler":{add_scalar:[3,3,1,""]},"ignite.contrib.handlers.visdom_logger.OutputHandler":{add_scalar:[3,3,1,""]},"ignite.contrib.handlers.visdom_logger.VisdomLogger":{attach:[3,3,1,""],attach_opt_params_handler:[3,3,1,""],attach_output_handler:[3,3,1,""]},"ignite.contrib.handlers.visdom_logger.WeightsScalarHandler":{add_scalar:[3,3,1,""]},"ignite.contrib.handlers.wandb_logger":{OptimizerParamsHandler:[3,2,1,""],OutputHandler:[3,2,1,""],WandBLogger:[3,2,1,""],global_step_from_engine:[3,1,1,""]},"ignite.contrib.handlers.wandb_logger.WandBLogger":{attach:[3,3,1,""],attach_opt_params_handler:[3,3,1,""],attach_output_handler:[3,3,1,""]},"ignite.contrib.metrics":{AveragePrecision:[4,2,1,""],GpuInfo:[4,2,1,""],PrecisionRecallCurve:[4,2,1,""],ROC_AUC:[4,2,1,""],RocCurve:[4,2,1,""]},"ignite.contrib.metrics.GpuInfo":{attach:[4,3,1,""],compute:[4,3,1,""],reset:[4,3,1,""],update:[4,3,1,""]},"ignite.contrib.metrics.regression":{CanberraMetric:[4,2,1,""],FractionalAbsoluteError:[4,2,1,""],FractionalBias:[4,2,1,""],GeometricMeanAbsoluteError:[4,2,1,""],GeometricMeanRelativeAbsoluteError:[4,2,1,""],ManhattanDistance:[4,2,1,""],MaximumAbsoluteError:[4,2,1,""],MeanAbsoluteRelativeError:[4,2,1,""],MeanError:[4,2,1,""],MeanNormalizedBias:[4,2,1,""],MedianAbsoluteError:[4,2,1,""],MedianAbsolutePercentageError:[4,2,1,""],MedianRelativeAbsoluteError:[4,2,1,""],R2Score:[4,2,1,""],WaveHedgesDistance:[4,2,1,""]},"ignite.engine":{deterministic:[5,0,0,"-"],engine:[5,0,0,"-"]},"ignite.engine.deterministic":{DeterministicEngine:[5,2,1,""],ReproducibleBatchSampler:[5,2,1,""],keep_random_state:[5,1,1,""],update_dataloader:[5,1,1,""]},"ignite.engine.deterministic.DeterministicEngine":{state_dict:[5,3,1,""]},"ignite.engine.engine":{Engine:[5,2,1,""]},"ignite.engine.engine.Engine":{add_event_handler:[5,3,1,""],fire_event:[5,3,1,""],has_event_handler:[5,3,1,""],last_event_name:[5,6,1,""],load_state_dict:[5,3,1,""],on:[5,3,1,""],register_events:[5,3,1,""],remove_event_handler:[5,3,1,""],run:[5,3,1,""],set_data:[5,3,1,""],state:[5,6,1,""],state_dict:[5,3,1,""],terminate:[5,3,1,""],terminate_epoch:[5,3,1,""]},"ignite.engine.events":{Events:[5,2,1,""],RemovableEventHandle:[5,2,1,""],State:[5,2,1,""]},"ignite.engine.events.RemovableEventHandle":{remove:[5,3,1,""]},"ignite.exceptions":{NotComputableError:[7,2,1,""]},"ignite.handlers":{Checkpoint:[10,2,1,""],DiskSaver:[10,2,1,""],EarlyStopping:[10,2,1,""],ModelCheckpoint:[10,2,1,""],TerminateOnNan:[10,2,1,""],Timer:[10,2,1,""]},"ignite.handlers.Checkpoint":{load_objects:[10,5,1,""]},"ignite.handlers.Timer":{attach:[10,3,1,""],running:[10,6,1,""],step_count:[10,6,1,""],total:[10,6,1,""]},"ignite.metrics":{Accuracy:[12,2,1,""],Average:[12,2,1,""],ConfusionMatrix:[12,2,1,""],DiceCoefficient:[12,1,1,""],EpochMetric:[12,2,1,""],Fbeta:[12,1,1,""],GeometricAverage:[12,2,1,""],IoU:[12,1,1,""],Loss:[12,2,1,""],MeanAbsoluteError:[12,2,1,""],MeanPairwiseDistance:[12,2,1,""],MeanSquaredError:[12,2,1,""],Metric:[12,2,1,""],MetricsLambda:[12,2,1,""],Precision:[12,2,1,""],Recall:[12,2,1,""],RootMeanSquaredError:[12,2,1,""],RunningAverage:[12,2,1,""],TopKCategoricalAccuracy:[12,2,1,""],VariableAccumulation:[12,2,1,""],mIoU:[12,1,1,""]},"ignite.metrics.Metric":{attach:[12,3,1,""],compute:[12,3,1,""],detach:[12,3,1,""],is_attached:[12,3,1,""],reset:[12,3,1,""],update:[12,3,1,""]},"ignite.utils":{apply_to_tensor:[14,1,1,""],apply_to_type:[14,1,1,""],convert_tensor:[14,1,1,""],one_rank_only:[14,1,1,""],setup_logger:[14,1,1,""],to_onehot:[14,1,1,""]},ignite:{utils:[14,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","classmethod","Python class method"],"5":["py","staticmethod","Python static method"],"6":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:classmethod","5":"py:staticmethod","6":"py:attribute"},terms:{"048469054396264e":3,"062699635047466e":3,"10th":[3,5],"199999941396527e":3,"20th":3,"21st":3,"2nd":1,"3081999895803165e":3,"30th":3,"3706499885302037e":3,"433099987480091e":3,"4rd":5,"500th":5,"50th":5,"7412999770604074e":3,"831763693706307e":3,"abstract":[1,3,13],"boolean":12,"break":[1,13],"byte":14,"case":[1,2,8,10,12,13],"class":[1,2,3,4,5,7,8,10,12],"default":[1,2,3,4,5,10,12,14],"enum":5,"final":[10,12,13],"float":[3,10,12],"function":[1,2,3,4,5,8,10,12,13,14],"import":[1,3,5,8,10,12,13,14],"int":[2,3,5,10,12,14],"long":[2,12],"new":[3,5,9,12,14],"public":[0,12],"return":[1,2,3,4,5,8,10,12,13,14],"static":[3,10],"super":12,"switch":[5,11],"true":[1,2,3,4,5,8,10,12],"try":1,"while":[1,2,3,5,8,9],And:[12,13],Being:9,For:[1,2,3,5,8,10,12,13,14],NOT:5,The:[0,1,2,3,5,9,10,12,13],Then:3,There:[8,10],These:12,Use:3,Used:3,Using:[1,10],Will:3,__class__:3,__init__:12,__name__:3,__version__:3,_can_:12,_complet:3,_infer:13,_lrschedul:[2,3],_metrics_transform:13,_neg_val_loss:10,_num_correct:12,_num_exampl:12,_output_transform:13,_prepare_batch:[2,13],_start:3,_updat:13,a_j:4,abc:[5,14],about:[5,9,11],abov:[1,10,12,13],abs:3,absolut:[3,4,12],acc:[1,3],acc_metr:12,accept:[3,5,10,13],access:[3,5,9],accord:[1,10,12],account:[5,9],accumul:[4,11,12,13],accumulation_step:8,accuraci:[1,3,5,10,12,13],achiev:[1,3],across:12,action:10,activ:[0,4,9],activated_output_transform:4,actual:[4,10,12],adapt:12,add:[1,2,5,8,13],add_early_stopping_by_val_scor:2,add_event_handl:[1,3,5,8,10,13],add_scalar:3,added:[3,5,12,13],adding:[3,5,11,13],addit:[1,2,3,5,11,13],adit:2,adjust:3,advanc:3,affect:3,affili:0,after:[0,1,3,5,10,12,13],afterward:3,again:[5,9],against:9,aggreg:[3,12,13],all:[0,1,3,4,5,9,10,12],all_reduc:12,allow:[5,8,9,13],alpha:[5,12],alreadi:[3,5,10,12],also:[0,1,2,3,5,12,13],alter:1,alykhan:0,alykhantejani:0,amersfoort:0,among:[5,8],ani:[1,3,4,5,9,10,12,14],anmol:0,anmolsjoshi:0,anneal:3,anonym:3,anoth:[1,3,8,10,12,13],another_engin:3,another_loss:3,answer:8,anyon:9,apex:6,api:[3,9],api_token:3,appear:0,append:5,appendix:4,appli:[2,3,4,5,10,12,14],applic:[1,3],apply_to_tensor:14,apply_to_typ:14,appreci:0,approach:1,approv:9,approxim:1,arang:1,archiv:10,area:4,arg:[1,2,3,5,12,13],argmax:12,argument:[1,2,3,5,10,12,13],arithmet:11,arrai:3,articl:8,artifact:3,arxiv:3,asctim:14,ask:[8,9],aspect:1,assert:[4,5,12],associ:[2,5],assum:[3,12],asynchron:2,atom:10,attach:[1,2,3,4,5,8,10,12,13],attach_opt_params_handl:3,attach_output_handl:3,attribut:[1,5,10],auc:4,augment:1,auto:6,automat:[3,5,8,12],avail:[3,4,12],averag:[2,4,5,10,12],average_precision_scor:4,averageprecis:4,avg:[12,13],avg_output:12,avg_precis:4,avoid:[3,9,14],awesome_filenam:3,axi:[2,3],back:[3,8],backend:[5,12],background:12,backprop:2,backpropag:11,backpropev:8,backward:[1,5,11,13],backward_complet:8,backward_start:8,bar:[2,3,4],bar_ev:5,bar_format:3,barrier:14,base:[1,2,3,4,5,9,10,11,12],baselin:6,basesavehandl:10,basic:[5,6,8],basictimeprofil:3,batch:[1,2,3,4,5,8,10,12,13],batch_i:2,batch_loss:5,batch_sampl:5,batch_siz:[1,3,8,12],batch_x:2,batchsampl:5,becaus:12,becom:[0,5,9],been:[0,3,5,10],befor:[2,4,5,12],behaviour:[1,3,10],being:[5,9,12],below:[1,4,10,11,12],benchmark:5,best:[2,3,8,10],best_loss:3,best_model_10_val_acc:10,best_model_9_val_acc:10,best_model_sav:8,beta:[5,12],between:[1,2,3,5,10,12],bia:4,bias:3,binari:[4,12],binary_accuraci:12,blog:8,boilerpl:11,bool:[2,3,10,12,14],botchkarev:4,bound:[3,5],boundari:3,breez:11,bucket:3,bug:3,built:5,bypass:3,bypass_mod:3,calcul:[4,8,12],call:[1,2,3,4,5,8,10,12],call_everi:5,call_on_ev:5,call_on_special_ev:[1,5],call_onc:5,callabl:[2,3,4,5,10,12,14],callableeventwithfilt:5,callback:10,can:[0,1,2,3,4,5,8,9,10,11,12,13],canberra:4,canberrametr:4,candid:0,cannot:[3,4,7,12],care:[9,12],carri:9,cast:9,categor:12,cdot:4,chang:[2,3,5,9,10],characterist:4,chart:3,check:[5,10,12],checkpoint:[1,2,3,10,11],checkpoint_12345:10,checkpoint_50000:1,checkpoint_7000:10,checkpoint_8000:10,checkpoint_fil:1,checkpoint_fp:10,chintala:0,choic:3,chunk:2,cifar100:6,cifar10:[1,11],citat:0,clarifi:9,classif:[3,4,6],classifi:6,classmethod:3,client:3,close:3,closing_event_nam:3,cloud:[3,10],cnn:3,code:[1,3,6,8,9,11,12],coeffici:[4,12],collabor:0,collect:[5,10,12,14],column:3,com:[0,3,11],combin:[5,12],combined_schedul:3,comment:9,commit:9,common:[2,3,13],commun:[0,3,9],compact:[6,11],comparison:11,complet:[1,3,4,5,8,11,13,14],complex:11,compon:13,compos:10,compress:10,compris:4,comput:[1,2,3,4,5,7,8,10,13],computation:2,compute_engin:5,compute_fn:12,compute_mean_std:5,concat:3,concept:[5,11],concis:11,concret:9,concurr:3,conda:[0,11],condit:12,confer:3,confid:4,config:3,configur:[1,2,3,5,6,14],confus:12,confusion_matrix:12,confusionmatrix:12,conjunct:12,consensu:9,consequ:8,consid:[0,1,10,12],construct:2,constructor:[10,12,13],contact:0,contain:[1,3,4,5,10,12],context:[3,5],continu:[1,9],contrib:[6,11],contribut:[0,2,3,4,9,12],contributor:0,control:[1,10],convert:14,convert_tensor:14,convolut:6,copi:[2,3],core:5,correct:[2,3,8,12],correspond:[1,3,10,12],cosin:3,cosineannealinglr:3,could:[10,12,13],count:[5,10],counter:10,cours:3,cpe1:3,cpe2:3,cpu:2,crash:1,creat:[1,2,3,5,10,11,13],create_dir:[1,10],create_engin:13,create_lr_scheduler_with_warmup:3,create_supervised_evalu:[1,3,12,13],create_supervised_tbptt_train:[1,2],create_supervised_train:[1,3,13],creation:3,criterion:[5,8],critic:14,csv:3,ct_co:14,cuda:[2,3,12],cudnn:[1,5],cumulative_delta:10,current:[0,1,3,4,5,10,12],curv:[1,4],custom:[1,3,5,11],custom_ev:11,custom_event_filt:[1,5],custom_var:12,custom_var_mean:12,customaccuraci:12,customev:5,customperiodicev:3,cycl:[0,3,6],cycle_mult:3,cycle_s:3,cyclegan:3,cyclic:3,cyclicalschedul:3,damag:10,data1:5,data2:5,data:[1,2,3,4,5,11,12,13,14],data_it:[1,8],data_load:[1,5,10],dataflow:[3,5,8],dataflow_stat:3,dataload:[1,3,5,8,12,13],dataloader_stop_iter:[5,8],datapoint:1,dataset:[1,3,5,6,8,10,12,13],datatyp:12,dcgan:6,deadlock:9,deal:1,debug:[3,14],decai:12,decid:9,decis:[0,9],decor:[1,5,12,13,14],decreas:3,dedic:2,def:[1,3,4,5,8,10,12,13,14],defin:[1,3,5,8,10,12,13],definit:4,delay_start:3,depend:[5,11,12],deprec:[3,5,10],deriv:5,desc:3,describ:[0,1,9],descript:3,deseri:1,design:9,desir:[3,10],desrozi:0,destin:10,detach:[1,12],detail:[0,1,3,4,5,8,9,10,12,13],determin:[4,5,8,12],determinist:11,deterministicengin:[1,5],devic:[2,3,4,5,8,12,13,14],device_id:12,diagon:12,dice:12,dicecoeffici:12,dict:[2,3,5,10],dictionari:[1,2,3,4,5,10,12],differ:[1,3,4,12],difficult:1,dill:12,dim:[2,4,5,12],dimens:[2,12],dir:3,direct:9,directli:[3,10],directori:[2,3,10],dirnam:[3,10],disk:10,disksav:[1,10],displai:[1,3,6],distanc:[4,12],distribut:[1,2,11,14],distributed_rank:14,distributeddataparallel:12,distributedsampl:[2,12],diverge_th:3,divid:10,do_single_epoch_iter:[1,5],do_something_once_on_25_epoch:1,doc:[1,3,12],document:[0,1,2,3,8,9],doe:[1,3,5,12],doesnt:10,done:[1,3,5,12,13],door:5,down:3,download:3,drop:3,dtype:5,due:[0,3],durat:3,dure:[1,3,4,5,10,11,12,13],dynam:5,each:[1,2,3,4,5,11,12],earli:[2,8,11],earlystop:[2,8,10],earn:9,easi:13,easili:[1,8,9,13],ecosystem:0,edit:3,effect:[2,8],efficientnet:[3,6],effort:0,either:[3,4,8],elaps:[3,10],element:[9,12],elijah:0,els:12,email:0,emeritu:9,emit:5,empti:3,enabl:10,encod:6,encount:[5,12],encourag:13,end:[0,1,3,4,5,12,13],end_lr:3,end_valu:3,end_value_mult:3,engag:9,engin:[3,4,10,11,12,13,14],enough:1,entir:12,entiti:3,entri:3,env:3,environ:[1,3],epoch:[1,2,3,4,5,8,10,12,13,14],epoch_bound:12,epoch_complet:[1,3,5,8,10,13],epoch_length:[1,3,5,8],epoch_start:[1,5,10],epochmetr:12,epochs_10:3,epochs_10_start:3,epochs_:3,eps:12,equal:[10,12,14],equival:[8,13],erip:0,error:[4,12,14],essenc:1,essenti:13,establish:9,estim:4,eta_min:3,etc:[0,1,3,5,8,10,14],eval:[5,13],evalu:[1,3,5,8,10,11,12,13,14],even:[1,5,13],event:[2,3,4,10,11,12,13],event_complet:3,event_filt:[1,2,5],event_index:3,event_nam:[3,4,5,10],event_start:3,event_to_attr:5,eventenum:[5,8],events_list:5,eventslist:5,everi:[1,2,3,5,8,10,12,13],exactli:[1,5],exampl:[1,4,5,8,10,11,12,13,14],except:[1,5,10,11,12],exception_rais:5,exchang:5,execut:[1,3,5,10,13],execute_someth:5,exempl:10,exhaust:8,exist:[3,9,10],exit:3,exp:[3,4],expans:3,expect:[4,9,10,12],expens:[12,13],experi:[1,3,6],experiment_nam:3,explan:[2,11],explicitli:8,explor:3,exponenti:3,exponentiallr:3,expos:10,ext:10,extra:12,facebook:0,facebookresearch:3,facilit:1,factor:[3,12],fae:4,fall:3,fals:[1,2,3,5,10,12,14],faq:11,fashion:[6,12],fast:6,fastai:3,fastailrfind:3,favor:3,fbeta:12,featur:[6,11,12],fed:12,feedback:9,fetch:[1,2,3,5],few:[6,11],figsiz:3,figur:3,file:[3,10,13,14],filenam:[3,10],filename_prefix:[3,10],filepath:14,fill:3,filter:[1,3,5,10,12,14],find:[3,9],finder:3,finetun:6,finite_size_data_it:8,finite_unk_size_data_it:8,fire:[1,3,5,13],fire_ev:[1,5,8],first:[0,1,3,5,12,13],fix:10,flag:[3,10,12],flatten:[4,12],flexibl:[1,5,8],float32:[4,12],float64:5,fmassa:0,follow:[0,1,3,5,8,10,12,13],fomin:0,foo_ev:5,footnot:13,forget:10,form:[3,4,9,12],formal:9,format:[1,3,5,8,12,13,14],forward:11,found:[1,3,4,5,8,13],frac:4,fraction:4,fractionalabsoluteerror:4,fractionalbia:4,framework:1,francisco:0,frequenc:3,frequent:[3,8],from:[0,1,3,4,5,6,8,9,10,11,12,13,14],fromm:3,full:[6,11],fulli:12,func:[5,14],function_before_backprop:8,further:10,furthermor:11,futur:3,gamma:3,gan:6,gather:12,gener:[1,3],geometr:[4,12],geometricaverag:12,geometricmeanabsoluteerror:4,geometricmeanrelativeabsoluteerror:4,get:[0,1,2,3,10,11,12,13],get_batch_complet:5,get_batch_start:5,get_data_load:13,get_device_nam:3,get_event_attrib_valu:3,get_local_copi:3,get_param:3,get_result:3,git:[3,11],github:[0,3,8,9,11],github_act:3,give:[9,13],given:[1,3,5,10,12],glob:3,global:[3,10],global_step:[3,10],global_step_from_engin:[3,10],global_step_transform:[3,10],gmae:4,gmail:0,gmrae:4,goe:[3,5],good:1,govern:11,gpu:[0,2,4,6,8,12],gpuinfo:[2,4],gradient:[2,3,11],grads_scalar_handl:3,gradshisthandl:3,gradsscalarhandl:3,granular:3,graph:3,grate:0,gratefulli:0,ground:[0,4,12],group:[0,3,8,12],grown:0,guarante:[3,10],guid:[9,13],half:3,handl:[3,5],handler:[2,5,8,11,13,14],happen:1,hardwar:1,harmon:12,has:[0,1,2,5,10,11,12],has_event_handl:5,have:[0,1,3,4,5,8,9,10,12,13],hedg:4,help:[0,1,3,5,6,11,12],helper:[1,3,5,10,11,12,13,14],here:[1,3,5,8],high:[0,11],higher:10,highest:10,highli:0,hist:3,histogram:3,histogram_granular:3,histogram_update_freq_multipli:3,histor:0,histori:12,hold:12,hors:6,host:[0,2],hot:14,how:[1,3,6,8,9,11],howev:[1,2,4,12,13],howpublish:0,html:3,http:[0,3,11],hyperparamet:6,ideal:5,idl:10,ieee:3,ignit:[1,6,8,13],ignor:12,ignore_index:12,ignored_class:12,illustr:12,imag:5,imagenet:6,img_mean2:5,img_mean:5,impact:[1,3],implement:[3,4,8,10,12,13],implic:[0,9],improv:[1,2,10,14],in_training_loop_on_epoch_complet:8,includ:1,increas:[3,8,10,11],increment:10,indefinit:3,independ:3,index:[3,12],indic:[1,2,5,10,12,14],infer:3,infinit:10,infinite_iter:8,info:14,inform:[1,2,3,4,13],infrastructur:0,inherit:[10,12],init:3,init_user_valu:5,initi:[1,3,4,5,12,14],initializ:1,input:[1,2,3,4,5,10,12,14],input_:14,input_typ:14,insert:8,insid:3,inspir:[0,6],instal:[2,3],instanc:[3,12],instead:[3,10,11,12],intact:5,integ:[3,10],integr:3,intend:1,intens:2,intention:3,inter:12,interact:[1,9],interest:[0,4,9,12,13],intern:[0,1,2,3,5,10,12],intersect:12,interv:2,introduc:1,invok:5,involv:9,iou:12,iou_metr:12,iou_no_bg_metr:12,ipywidget:3,is_attach:[4,12],is_multilabel:12,issu:[1,8],item:[1,5,8,12,13],iter:[1,2,3,4,5,10,11,13],iter_count:1,iteration_:3,iteration_complet:[1,3,4,5,8,10,12,13],iteration_start:[1,3,5,10],iterations_1000:3,iterations_1000_complet:3,iterations_:3,its:[1,3,5,10,11,12],jason:0,jasonkriss:0,joe:0,join:9,joost:0,joshi:0,journal:0,jspisak:0,jump:3,june:0,jupyt:3,just:[1,3,8,13],keep:[1,3,5,10],keep_random_st:[1,5],kei:[2,3,5,10],kept:[5,10],keyword:[2,3,5,10,12],known:2,kriss:0,kumar:0,kwarg:[1,2,3,5,10,12,13],kwd:3,l_bar:3,label:[3,8],lambda:[1,3,4,5,10,12],larg:13,larger:[3,4,5,12],last:[1,2,3,5,10,13],last_checkpoint:10,last_event_nam:5,later:3,latter:[5,12],launch:8,lead:[0,4,12],learn:[0,2,3,6,10],least:[10,12],left:4,legend:3,len:[1,3,5],length:[1,2,3,5],lesli:3,less:[3,10],let:[1,3,5,8,13],level:[0,11,14],levelnam:14,librari:[0,3,11,12],like:[1,3,4,8,11,12,13,14],limit:[8,12],line2d:3,line:[3,6,11,13],linear:10,linearli:3,list:[1,2,3,4,5,11],listdir:10,load:[1,3,5,10],load_object:[1,10],load_state_dict:[1,3,5,10],local:[3,12],local_rank:12,log:[2,3,4,6,8,12,13,14],log_dir:3,log_every_it:2,log_fil:3,log_handl:[3,4],log_intermediate_result:3,log_lr:3,log_messag:3,log_metr:1,log_param:3,log_running_avg_metr:12,log_train:5,log_training_loss:13,log_training_loss_every_50_iter:1,log_training_result:13,log_validation_result:13,logarithm:3,logger:[2,3,6,14],logic:[5,13],logit:12,longer:0,look:[0,1,3,4,13,14],lookup:3,loop:[1,5,6,8,11,13],loss1:3,loss2:3,loss:[1,2,3,5,8,10,12,13],loss_fn:[1,2,8,12,13],lr_find:3,lr_finder:11,lr_schedul:[1,2,3,10],lr_scheduler_1:3,lr_scheduler_2:3,lr_scheduler_3:3,lr_suggest:3,lr_valu:3,lr_values_1:3,lr_values_2:3,lr_values_3:3,lr_values_4:3,lrschedul:2,lvert:4,made:[1,9],magellium:0,mai:[2,3,5],main:[3,13],maintain:9,mainten:0,major:9,make:[0,1,3,5,9,10],manag:[3,5],manhattan:4,manhattandist:4,mani:[2,9],manner:3,manual:1,manual_se:[1,5,8,12],map:[3,4,5,10,12,14],mare:4,mask:12,massa:0,mathemat:4,matplotlib:3,matrix:12,max:[3,4,5],max_:4,max_epoch:[1,3,5,8,10,13,14],maxa:4,maximum:4,maximumabsoluteerror:4,mdae:4,mdape:4,mdrae:4,mean2:5,mean:[3,4,5,12,14],mean_custom_var:12,mean_iou_no_bg_metr:12,meanabsoluteerror:12,meanabsoluterelativeerror:4,meanerror:4,meannormalizedbia:4,meanpairwisedist:12,meansquarederror:12,measur:[4,10,13],median:4,medianabsoluteerror:4,medianabsolutepercentageerror:4,medianrelativeabsoluteerror:4,mem:4,member:9,memori:[4,12],merg:[0,9],merit:9,meritocrat:9,messag:[1,3,14],metadata:3,method:[1,3,5,8,10,11,12,13,14],metric1:12,metric2:12,metric:[1,2,3,5,7,8,10,11,13],metric_nam:[2,3,4],metrics_lambda:12,metricslambda:12,middl:[1,3],might:8,mileston:3,milestones_valu:3,min:3,min_delta:10,mind:[1,3],minimum:[3,10],minst:3,miou:12,misc:0,mix:6,mlflow:[2,3,6],mlflow_logg:11,mlflow_tracking_uri:3,mlflowlogg:[2,3],mnb:4,mnist:[1,3,11,13],mode:3,model:[1,2,3,4,5,8,10,11,12,13],model_checkpoint:3,model_state_dict:10,modelcheckpoint:[2,3,8,10],modifi:5,modul:[2,3,4,6,10,12,14],momentum:[3,13],month:[0,9],more:[0,1,2,4,5,8,9,10,11,12,13],most:[8,12,13],motiv:0,move:[2,10,13,14],multi:[4,10,12],multiclass:12,multilabel:12,multilpl:6,multipl:[1,3,6,8,10,12],must:[3,4,12],mydata:1,mymetr:[4,12],mymodel:[8,10],myprefix:10,myprefix_checkpoint_40:10,myprefix_mymodel_4:10,myprefix_mymodel_6:10,n_class:12,n_epoch:3,n_fmt:3,n_iter:3,n_save:[2,3,10],name:[2,3,4,5,10,12,13,14],namespac:3,nan:[10,12],nativ:[2,6],necessari:[1,12],need:[1,3,5,8,10,12],neg_val_loss:10,neglect:12,neptun:[2,3],neptune_logg:11,neptune_project:3,neptunelogg:[2,3],neptuneml:3,neptunesav:3,neptuneserv:3,neputn:3,net:13,network:[0,3,6],neural:[0,3,6,11],new_attribut:1,new_batch_sampl:5,newli:[3,5],next:[1,3,5,13],nll:[3,10,13],nllloss:13,no_grad:[5,13],node:[6,12],nomin:9,non_block:[2,5,8,14],none:[1,2,3,4,5,10,12,13,14],norm:[3,8],normal:[3,4,12],notcomputableerror:[4,7,12],note:[3,5,10,11,12,13],notebook:[3,11],now:[2,5,13],npt_logger:3,num_categori:12,num_class:[12,14],num_epoch:[1,5],num_ev:3,num_exampl:12,num_it:3,num_work:[3,5,12],number:[1,2,3,5,10,12,14],numer:3,numpi:[1,3,5],nvidia:6,object:[2,3,5,10,12,14],observ:[12,13],obtain:[8,12],occasion:11,occur:[1,2,10],off:0,offline_mod:3,older:10,on_every_1000_iter:3,on_every_10_epoch:3,on_iteration_complet:1,on_training_end:1,on_training_start:1,onc:[1,3,4,5,8,12],one:[1,2,3,4,5,8,10,12,13,14],one_rank_onli:14,ongo:9,onli:[1,2,3,8,10,12,13],onlin:[3,12,13],open:[0,3,5],oper:[3,4,5,12],opitm:8,opportun:2,opt_state_dict:10,optim:[1,2,3,5,8,10,13],optim_step_complet:8,optimizer_params_handl:3,optimizerparamshandl:3,option:[1,2,3,4,5,10,12,13,14],order:1,ordereddict:5,org:3,organ:9,origin:1,other:[0,1,2,3,5,10,11,12],otherwis:[3,10,12],our:[0,9,13],out:[0,12],output:[1,2,3,4,5,8,10,12,13,14],output_devic:12,output_nam:2,output_path:[2,3],output_simulated_valu:3,output_transform:[1,3,4,5,10,12],output_uri:3,outputhandl:[3,4],outsid:3,over:[1,2,3,5,8,12,13],overcom:12,overrid:[5,12],overridden:3,own:[3,11],p_j:4,packag:[2,3,11],page:4,pair:[3,4],pairwis:12,paragraph:1,parallel:12,param:3,param_group:5,param_group_index:3,param_histori:3,param_nam:3,param_schedul:11,paramet:[1,2,4,5,10,11,12,13,14],paramgroupschedul:3,paramschedul:[2,3],part:[10,13],parti:12,partial:12,particip:[9,12],particular:0,pascal:6,pass:[2,3,4,5,10,11,12,13],password:3,past:[0,9],path:[2,3,10,14],path_to_dir:3,pathnam:3,patienc:[2,8,10],pattern:[1,3,13],paus:10,pbar:3,peopl:0,per:5,percentag:[3,4],perform:[3,8],period:[1,3,10,12],persist:[3,4],phase:3,pickl:12,piecewiselinear:3,pin_memori:12,pip:[3,11],place:9,plateau:8,platform:1,pleas:[0,1,3,5,10],plot:3,plot_valu:3,plt:3,plx_logger:3,point:5,polyaxon:[2,3,6],polyaxon_logg:11,polyaxonlogg:[2,3],port:[3,6],posit:[3,12],possibl:[1,3,10],post:3,postfix:3,potenti:[4,12],pow:12,practic:[1,8,12],pre:11,precis:[1,3,4,5,6,12],precision_recall_curv:4,precisionrecallcurv:4,predict:[3,4,12],predict_on_batch:5,prefix:[2,10],prepar:3,prepare_batch:[1,2,5,8],preprocess:5,preprocess_batch:5,present:[0,2,5],preserv:3,pretrain:10,previou:[1,3],previous:13,print:[1,3,5,8,10,12,13],print_epoch:5,print_loss:1,print_result:3,print_train_data:1,probabl:4,problem:1,process:[0,1,2,3,4,9,10,12,14],process_batch:8,process_funct:[1,4,5,10,12],processing_funct:5,processing_stat:3,prod:12,produc:[1,3,5],profil:3,progress:[2,3,4],progressbar:[3,4],project:[0,3,9,13],project_nam:3,propag:8,proper:3,properti:3,protocol:5,provid:[1,2,3,4,5,6,10,11,12],pth:10,publish:0,pull:[0,9],pure:[0,11],purpos:[3,9,12,13],pylab:3,pynvml:2,python:3,pytor1:3,pytorch:[1,2,3,6,11,12],qualifi:[3,10],quantiti:[4,12],question:11,quickstart:11,r2score:4,r_bar:3,rais:[4,5,7,10,12],ram:[4,12],rand:[1,8,12],randint:[1,12],randn:10,random:[1,5],random_train_data_gener:1,random_train_data_load:1,randomli:1,rang:[1,3,5,8,10],rank:[12,14],rapidli:11,rate:[2,3],rate_fmt:3,rather:1,ratio:3,read:3,readabl:[11,14],reason:0,recal:[4,12],recant:9,receiv:[2,4,5,10,12,13],recommend:3,recurr:2,recurs:[3,12],redefin:13,reduc:[3,8,12],reduct:3,refer:[1,3,4,6,11],regist:[1,5,10],register_ev:[1,3,5,8],regress:11,reinforc:6,reinit__is_reduc:12,rel:4,relat:[5,9],releas:[0,1],relev:14,reli:1,remain:[1,3],remov:[3,5,10],removableeventhandl:[1,3,5],remove_event_handl:[1,5],render:3,repeat:[3,5],replac:[3,5,10],report:3,report_freq:3,repositori:[0,3,9],repres:[2,3,9,12],reproduc:[1,5,11],reproduciblebatchsampl:5,request:[0,9],requir:[2,3,12,13],require_empti:[3,10],requires_grad:3,rerun:1,res:12,reset:[3,4,5,10,12],reshap:5,resnet:6,resourc:8,respect:[2,4,12],restart:[5,8],restart_it:8,restor:[1,3,5],restrict:[1,5,12],result:[1,3,12,13],resum:[5,10,11],retain:10,reus:1,review:[9,13],rewind:5,right:[4,9],rippeth:0,rng_state:1,roc:4,roc_auc:4,roc_auc_scor:4,roc_curv:4,roccurv:4,role:13,roll:11,root:12,rootmeansquarederror:12,roughli:1,round:12,rule:12,run:[1,2,3,4,5,8,10,12,13,14],running_avg_accuraci:12,running_avg_loss:12,runningaverag:[2,3,12],rvert:4,same:[0,1,2,4,5,8],sampl:[1,3,12],sampler:[2,5,12],save:[1,2,3,5,10],save_as_state_dict:10,save_best_model_by_val_scor:2,save_engin:5,save_every_it:2,save_handl:10,save_histori:3,save_interv:10,scalar:[3,12],scale:3,schedul:[1,2,11],scheduler1:3,scheduler2:3,scheduler_1:3,scheduler_2:3,scheduler_kwarg:3,schema:12,scientif:0,scikit:0,score:[2,10,12],score_funct:[3,8,10],score_nam:[3,10],script:3,sdesrozi:0,search:[3,5],second:[3,10,13],section:[3,8],see:[1,2,3,5,8,10,11,12],seed:[1,3,5],seed_offset:5,seen:12,select:3,self:[10,12],send:[3,5],seper:3,sequenc:[2,12,14],sequenti:3,serial:[1,10,12],server:3,set:[1,2,3,5,9,10,12,13],set_bypass_mod:3,set_data:[5,8],set_devic:12,set_epoch:2,set_se:[1,5],setup:[1,3,5,8,10,11,14],setup_common_distrib_training_handl:2,setup_common_training_handl:2,setup_logg:14,setup_mlflow_log:2,setup_neptune_log:2,setup_plx_log:2,setup_sampl:5,setup_saved_rng_st:5,setup_tb_log:2,setup_trains_log:2,setup_visdom_log:2,setup_wandb_log:2,sever:[0,6,8,12,13],sgd:[3,10,13],shallow:[4,12],shape:[4,5,12,14],share:3,shortcut:[3,5],should:[2,3,5,10,12],show:[3,11,12],show_legend:3,shown:[4,9,12],shuffl:1,side:11,sigmoid:4,signal:5,signatur:[5,12],similar:1,similarli:1,simpl:[1,3,8,12],simpler:1,simpli:[1,3,8,13],simul:[1,3],simulate_valu:3,sinc:[0,1,3,5,10],singl:[1,2,3,5,6,8,10,12],situat:3,size:[1,3,8,12],skip:[1,3],skip_end:3,skip_start:3,sklearn:4,slack:0,sleep:10,slow:3,small:6,smaller:2,smith17:3,smith:3,smooth:3,smooth_f:3,snippet:[12,13],softmax:4,softwar:1,solut:3,some:[1,3,5,8,12],some_handl:14,someth:[1,5,8,12],soumith:0,sourc:[0,1,2,3,4,5,7,10,11,12,13,14],specif:[1,2,3,5,10,12],specifi:[3,5,8,10,12],spent:3,spisak:0,sqrt:5,squar:[4,12],src:12,stabl:11,standalon:3,standard:14,start:[0,1,2,3,4,5,8,10,11,12,13,14],start_iter:5,start_valu:3,start_value_mult:3,stat:3,state:[2,3,4,5,8,10,11,12,13],state_dict:[1,3,5,10],state_dict_user_kei:5,statement:5,std:[3,5],stderr:3,stdout:3,step:[1,2,3,5,8,10,13],step_count:10,step_mod:3,step_numb:10,step_schedul:3,step_siz:3,steplr:3,still:13,stop:[2,3,8,10,11],stop_train:8,stopiter:[1,5],storag:[1,3,10],store:[1,2,3,4,5,10,12],str:[2,3,4,5,10,12,14],strict:10,string:[3,5],strive:9,structur:[0,9,10],style:[3,6],subclass:[2,3],subplot:3,subsequ:2,subset:13,successfulli:0,suffix:10,suggest:[3,11],sum:[5,12],sum_:4,summarywrit:3,supervis:[1,2,3],support:[0,2,3,5,12],sure:3,switch_batch:5,switch_dataload:5,switch_iter:5,sylvain:0,sync:3,sync_all_reduc:12,synchron:[3,5],synchronis:14,system:1,t_co:5,t_max:3,tab:3,tag:[2,3,4],take:[1,3,9,10,12,13],taken:[3,5,12,14],target:[4,5,12],task:[1,3,4,6],task_nam:3,task_typ:3,tasktyp:3,tb_log:3,tb_logger:[3,4],tbptt:[2,8],tbptt_event:[2,5],tbptt_event_to_attr:5,tbtt_step:2,team:11,tejani:0,temporari:10,tensor:[2,3,4,10,12,14],tensorboard:[2,3,4,6],tensorboard_logg:11,tensorboardlogg:[2,3],tensorboardx:3,termin:[5,8],terminate_epoch:5,terminate_single_epoch:5,terminateonnan:[2,10],test:[1,3],test_dataset:12,test_load:[1,12],test_sampl:12,text:[3,4,6],than:[3,4,5,10,12],thei:[3,5,9,12],them:[1,3,8,9,10],therefor:[1,8,12,13],thi:[0,1,2,3,4,5,8,9,10,11,12,13],thing:[5,11,13],third:12,those:1,thread:3,threadpoolexecutor:3,three:12,threshold:[4,12],thresholded_output_transform:12,thrive:0,through:[2,3,9,12,13],throught:11,thu:[1,3,8,13],time:[1,3,5,8,10,11,14],time_iter:5,time_iteration_complet:5,time_iteration_start:5,time_profil:11,timer:[5,10],titl:[0,1,3],tmp:[1,5,8,10],to_load:[1,10],to_onehot:14,to_sav:[1,2,3,10],togeth:12,token:3,tolist:[1,5],tom:3,too:[8,12],tool:2,top:12,topkcategoricalaccuraci:12,torch:[1,2,4,5,8,10,12,13,14],torch_lr_schedul:3,torchnet:0,torchvis:6,total:[3,5,10],total_fmt:3,tqdm:[3,4,6],tqdm_kwarg:3,tqdm_logger:11,tqdm_notebook:3,track:[3,6],tracking_uri:3,train:[0,2,3,4,5,10,11,12,13,14],train_batch_s:13,train_dataset:12,train_evalu:[3,12],train_load:[1,3,5,13],train_loss:1,train_sampl:2,train_step:[5,8],train_updat:3,trainer:[1,3,4,5,8,10,11,12,13,14],trainer_with_lr_find:3,training_update_funct:10,trains_logg:11,trainslogg:[2,3],trainssav:3,transfer:10,transform:[1,3,4,10,12],trigger:[3,5],trim:3,trivial:1,truncat:11,trust:9,truth:[4,12],tune:6,tupl:[2,3,12,14],tutori:3,two:[1,2,3,10,12,13],type:[1,2,3,4,5,10,12,14],typic:[1,3],uint8:14,unaggreg:3,unaverag:12,under:[4,12],understand:8,union:[4,5,10,12,14],unix:3,unless:3,unregist:5,until:[1,3,5,9],unweight:12,updat:[1,2,3,4,8,12,13],update_dataload:5,update_fn:[3,8],update_funct:[2,13],update_model:[1,5],upload:3,upload_source_fil:3,upper:3,uri:3,url:[0,3],usag:[1,2,3,5,12],use:[0,1,2,3,4,5,8,10,12],used:[1,2,3,4,5,8,9,10,12,14],useful:[4,10,12],user:[1,2,3,5,8,10,12,13],user_handl:1,user_handler_funct:1,usernam:3,uses:[3,10],using:[1,3,4,5,6,8,10,11,12,13],usual:[3,5,12],util:[1,2,4,5,11,13],val:2,val_acc:[5,10],val_batch_s:13,val_dataload:5,val_load:[8,13],val_loss:10,val_step:8,valid:[1,3,5,8,10,11,12,13],validation_accuraci:3,validation_evalu:3,validation_load:1,validation_set:3,valu:[2,3,4,5,10,12],valuabl:3,value_0:3,value_1:3,van:0,variabl:[3,12],variableaccumul:12,variant:6,variat:6,variou:[3,6,9,12,13],vb_logger:3,vd_logger:3,vector:12,version:[1,3,11],vfdev:0,via:[0,1,5],victor:0,view:[3,12],visdom:[2,3,6],visdom_logg:11,visdom_password:3,visdom_port:3,visdom_server_url:3,visdom_usernam:3,visdomlogg:[2,3],vision:[3,6],visual:3,voc2012:6,vote:9,vt_co:10,wacv:3,wai:[1,3,5,8,9,12],wait:[2,10],wandb:[2,3],wandb_logg:11,wandblogg:[2,3],want:[1,3,4,8,9,10,12,13],warm:3,warmup_dur:3,warmup_end_valu:3,warmup_start_valu:3,warn:14,watch:3,wave:[3,4],wavehedgesdist:4,weakref:5,weight:[3,10,12],weights_scalar_handl:3,weightshisthandl:3,weightsscalarhandl:3,welcom:13,well:[3,13],what:[1,3],whatev:3,whd:4,when:[1,2,3,4,5,8,10,11,12,13,14],when_validation_loop_is_don:8,where:[2,3,4,8,10,12,13],whether:[3,12],which:[0,1,3,4,5,8,10,12],who:[0,9],whole:[2,3],window:3,winter:3,wise:2,wish:3,with_gpu_stat:2,with_pbar:2,with_pbar_on_it:2,within:9,without:[1,6,10,11,12,13],work:[3,10,11,12],worker:[3,14],would:[0,1,8,12,13],wrap:3,wrapper:3,write:[6,11],write_result:3,written:[12,14],wrt:14,xlabel:3,y0ast:0,y_pred:[1,4,5,8,12,13],y_true:12,year:0,yield:[1,8],ykumard:0,ylabel:3,ylim:3,yogesh:0,you:[0,1,3,4,10,11,12,13],your:[1,3,13],zebra:6,zero:[3,5],zero_grad:[1,5,8,13]},titles:["About us","Concepts","ignite.contrib.engines","ignite.contrib.handlers","ignite.contrib.metrics","ignite.engine","Examples","ignite.exceptions","FAQ","PyTorch-Ignite governance","ignite.handlers","Ignite Your Networks!","ignite.metrics","Quickstart","ignite.utils"],titleterms:{"switch":8,And:9,about:0,accumul:8,acknowledg:0,arithmet:12,author:0,backpropag:2,backward:8,base:8,cifar10:6,cite:0,code:13,complet:[10,12],comput:12,concaten:3,concatschedul:3,concept:1,contrib:[2,3,4],contributor:9,core:[0,9],cosineannealingschedul:3,creat:[8,12],custom:[8,12],custom_ev:3,data:8,dataflow:1,determinist:[1,5],develop:[0,9],distribut:[6,12],dure:8,each:8,emeritu:0,engin:[1,2,5,8],evalu:2,event:[1,5,8],exampl:[3,6],except:7,explan:13,faq:8,finit:8,forward:8,govern:[0,9],gradient:8,handler:[1,3,10],has:8,helper:2,histori:0,how:12,ignit:[0,2,3,4,5,7,9,10,11,12,14],infinit:8,instal:11,iter:8,its:8,join:0,known:8,length:8,linear:3,linearcyclicalschedul:3,list:[10,12],lr_finder:3,lrschedul:3,method:2,metric:[4,12],mlflow_logg:3,mnist:6,more:3,neptune_logg:3,network:11,nightli:11,notebook:6,other:[6,8],own:8,param_schedul:3,paramet:3,pass:8,piecewis:3,polyaxon_logg:3,provid:8,pytorch:[0,9],question:8,quickstart:13,regress:4,releas:11,reproduc:6,respons:9,resum:1,role:9,schedul:3,setup:2,state:1,synchron:1,team:0,tensorboard_logg:3,throught:2,time:2,time_profil:3,timelin:1,torch:3,tqdm_logger:3,train:[1,6,8],trainer:2,trains_logg:3,truncat:2,unknown:8,util:14,visdom_logg:3,wandb_logg:3,work:8,your:11}})