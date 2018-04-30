class StartCommand extends puremvc.MacroCommand implements puremvc.ICommand{
    public static readonly MAME: string  = 'StartCommand';
    /**
     * @override
     */
    public initializeMacroCommand(): void{
        this.addSubCommand(BootModels);
        this.addSubCommand(BootControllers);
        this.addSubCommand(BootViews);
    }
}